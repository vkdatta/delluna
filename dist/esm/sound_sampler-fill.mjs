export const name="sound_sampler-fill";
export const id="dl_ee2dbcb47b534811b2c7";
export const url=new URL("../icons/S/sound_sampler-fill.svg?v=180fb2723fb6e58c7148c74bf5409d2ece86102f38e7613c5bf9afeaba40fbc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
