export const name="flowchart-fill";
export const id="dl_d05323509640456b892d";
export const url=new URL("../icons/F/flowchart-fill.svg?v=90dcf9c16eb520cf0489ad248846abfd5cd46de9418765263ed04b38c872e0ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
