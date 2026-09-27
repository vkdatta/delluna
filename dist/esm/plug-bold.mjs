export const name="plug-bold";
export const id="dl_8cca5cd2c66b4d8c8438";
export const url=new URL("../icons/plug-bold.svg?v=b168ebf3a319859b07ea6090fd7d665b930a2ec18acac5b8782e932f3eec7bc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
