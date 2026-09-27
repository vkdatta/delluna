export const name="your_trips-fill";
export const id="dl_50121b840b2805a5d3ed";
export const url=new URL("../icons/your_trips-fill.svg?v=91ed11218be977844588005b6d70ef56a1eb325b4a2541891617dd21253dfded",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
