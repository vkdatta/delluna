export const name="toolbar";
export const id="dl_e922ae578ca7470ebec4";
export const url=new URL("../icons/toolbar.svg?v=752bd46b71da199beca195857b029067ac4306c20ff1b7779de70744f54d8e1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
