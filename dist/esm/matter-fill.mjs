export const name="matter-fill";
export const id="dl_5aa70c134099e8eb554f";
export const url=new URL("../icons/matter-fill.svg?v=8b17f78b3008f5fc8a6dc9a16782f829cf0c2d60024e91d54304ed861317ffd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
