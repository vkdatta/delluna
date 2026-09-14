export const name="arrow_and_edge";
export const id="dl_6c1abf3f1291439e9baa";
export const url=new URL("../icons/A/arrow_and_edge.svg?v=5cd9b30d30883ff9f9b9dc544945de5f17448aa852cdd3e8759c2f0922a7a2e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
