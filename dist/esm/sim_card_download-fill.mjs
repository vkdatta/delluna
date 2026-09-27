export const name="sim_card_download-fill";
export const id="dl_10bbdefcb532317492ae";
export const url=new URL("../icons/sim_card_download-fill.svg?v=397d5aee5e473edbe1a0e3677f40bd31ce1be3d73997366fc8854441572be39c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
