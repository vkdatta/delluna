export const name="media_output-fill";
export const id="dl_e76541204f0bda84ebe5";
export const url=new URL("../icons/media_output-fill.svg?v=2754f2c733faf7d495491ffb0d2e376774788464e5c76920b0c897c2b3d04938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
