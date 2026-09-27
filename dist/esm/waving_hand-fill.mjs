export const name="waving_hand-fill";
export const id="dl_d0debfeec0d450f6cb3e";
export const url=new URL("../icons/waving_hand-fill.svg?v=dca4491580c15db469c0e08c4fcc80f0afcaeb26c24ea56ff8eac008dd1e0b74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
