export const name="bath_soak";
export const id="dl_bb0d1af99fff90ad938f";
export const url=new URL("../icons/bath_soak.svg?v=0f2f29ea892c76145651d93bc325e0565bd657ab4752ef1c1e635d9b102f7b80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
