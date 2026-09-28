export const name="trolley-suitcase-fill";
export const id="dl_ff0730d143d88a3e1562";
export const url=new URL("../icons/trolley-suitcase-fill.svg?v=c7aee61725e897955a7bf4424c7bf59715b659a6d122c8b8653cadec4811851d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
