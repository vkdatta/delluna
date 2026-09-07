export const name="stack-simple-thin";
export const id="dl_6582e2e281e04a4cb487";
export const url=new URL("../icons/S/stack-simple-thin.svg?v=0c440e3568d7c3769ba83b0e4389123a6e165c864c120ef8c954605773c76ca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
