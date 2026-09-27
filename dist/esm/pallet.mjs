export const name="pallet";
export const id="dl_26e2afbfdb5363f66bc6";
export const url=new URL("../icons/pallet.svg?v=9c457ed2bb65d841304a65c7ffcb64fc309f68776d81a07189928e523f8b73f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
