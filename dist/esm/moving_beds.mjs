export const name="moving_beds";
export const id="dl_ad0813d88de5c150e711";
export const url=new URL("../icons/moving_beds.svg?v=122b0fb0e02f7a80e84578a609476bbb15229cf7c55dcd610966723000b57e64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
