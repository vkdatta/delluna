export const name="phone-list-duotone";
export const id="dl_f60676f445a3416ab5b2";
export const url=new URL("../icons/phone-list-duotone.svg?v=819cc0dc88dd7111ff83fbef1ca48a1a7dad0b70ded1a0178d0d91a63e3093fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
