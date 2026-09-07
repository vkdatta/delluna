export const name="trolley-suitcase-fill";
export const id="dl_c3c820e9394d48febdd4";
export const url=new URL("../icons/T/trolley-suitcase-fill.svg?v=c7aee61725e897955a7bf4424c7bf59715b659a6d122c8b8653cadec4811851d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
