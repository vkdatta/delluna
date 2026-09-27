export const name="mimo_disconnect";
export const id="dl_e732896a8dad82cf9721";
export const url=new URL("../icons/mimo_disconnect.svg?v=9355353cfe06439c0913b80c8b53fa0dfc0724a4114ec7a50689690d16dde328",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
