export const name="cleaning";
export const id="dl_ff420318ec0162005d3d";
export const url=new URL("../icons/cleaning.svg?v=c1353a50e507662109b45a4c13a69759e0a0c96e2ec2ea47b42cd105529f7b38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
