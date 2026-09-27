export const name="swap-light";
export const id="dl_08ef0c0089c03e6f3150";
export const url=new URL("../icons/swap-light.svg?v=f26aaea696f3ca7fae3a988690f20e955d2b2a921901f183f5c0b23fddcb8aec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
