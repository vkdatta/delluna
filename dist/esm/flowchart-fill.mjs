export const name="flowchart-fill";
export const id="dl_28418e7b0023117fc8d6";
export const url=new URL("../icons/flowchart-fill.svg?v=90dcf9c16eb520cf0489ad248846abfd5cd46de9418765263ed04b38c872e0ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
