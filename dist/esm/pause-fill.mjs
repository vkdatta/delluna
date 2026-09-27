export const name="pause-fill";
export const id="dl_6697f596ab8045d8b2fa";
export const url=new URL("../icons/pause-fill.svg?v=6c17ed753b56a5bc7bac4e95fcfd12f47529656568670dfb44a4b1ba99cda602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
