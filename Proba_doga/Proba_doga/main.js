const input = document.createElement("input");
input.type = "file";
input.id = "input";
input.addEventListener("change", (e)=>{
    const file = e.target.files[0];
    const filereader = new FileReader();
    filereader.onload = () =>{
        const filelines = filereader.result.split('\n').slice(1);
        for(const line of filelines){
            const fields = line.split(';');
            const field = new Author(fields[0], fields[1], fields[2]);
            manager.add(field);
        }

    }
    filereader.readAsText(file);
})
document.body.appendChild(input);

const exportbutton = document.createElement("button");
exportbutton.textContent = "Letőltés";
exportbutton.addEventListener("click", ()=>{
    const link = document.createElement("a");
    const content = manager.generateExport();
    const file = new Blob([content]);
    link.href = URL.createObjectURL(file);
    link.download = 'newdata.csv';
    link.click();
    URL.revokeObjectURL(link.href);
});
document.body.appendChild(exportbutton);


const Formfileds = [
    {
        id: "nev",
        label: "Név:",
        type: "text"
    },
    {
        id: "szamjegyekszama",
        label: "Számjegyek száma:",
        type: "text"
    },
    {
        id: "szazad",
        label: "Század:",
        type: "text"
    }
]

const manager = new Manager();
const table = new Table("table", manager);
const form = new Form("form", Formfileds, manager);




