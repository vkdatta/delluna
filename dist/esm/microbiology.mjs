export const name="microbiology";
export const id="dl_94438d74fb1d74a6f685";
export const url=new URL("../icons/microbiology.svg?v=a1083503f38ed2b2992d0f65bc0e1d6568bb378659558334772d69f866e5f77a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
