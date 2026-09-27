export const name="toolbox-fill";
export const id="dl_1076e0858f5c0885bf07";
export const url=new URL("../icons/toolbox-fill.svg?v=8d4310733800f28d1ef4d8c4e986da46437640d332b0598ae9e2395d865f1f70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
