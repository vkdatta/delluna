export const name="lucid_3-route-off";
export const id="dl_fb292dc77a894ba68158";
export const url=new URL("../icons/lucid_3-route-off.svg?v=4a4f898deddd025762fa71d1c928e8a44b256eff7f8d37a41c754c87ed92c16e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
