export const name="save-fill";
export const id="dl_56bc191daaf3de7fd4f9";
export const url=new URL("../icons/save-fill.svg?v=5b7db5837e2e538d7109f6d70577ddf6b4c0c9f6b2391337a967c02872619b5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
