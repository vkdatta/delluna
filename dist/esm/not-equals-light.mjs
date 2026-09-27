export const name="not-equals-light";
export const id="dl_eaa51ca7a9884e9a9dc1";
export const url=new URL("../icons/not-equals-light.svg?v=7d3ba1bad4da154abcf3f0c6cc3a40bccb4350db44e50fa9ebe21a115fe62548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
