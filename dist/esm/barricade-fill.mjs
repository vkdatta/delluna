export const name="barricade-fill";
export const id="dl_890e4b39cac04864acc4";
export const url=new URL("../icons/barricade-fill.svg?v=bd8d02d77a65806eec16ca793696a35479486a95be6c27d7c07065fd61f66c3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
