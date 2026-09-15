export const name="call_end-fill";
export const id="dl_110894bd7374427fb8a7";
export const url=new URL("../icons/C/call_end-fill.svg?v=36830bffc5ed886d47caad1304d97195b28ff6e9d7ff0c2f5749ff969f6557d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
