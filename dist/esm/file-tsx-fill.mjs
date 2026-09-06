export const name="file-tsx-fill";
export const id="dl_063a3bb56a044bf3b581";
export const url=new URL("../icons/file-tsx-fill.svg?v=c12d1c940d445f249e60380f8f005ca46c8b17b708c3417841432ee2f223fb37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
