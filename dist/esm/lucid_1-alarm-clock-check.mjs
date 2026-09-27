export const name="lucid_1-alarm-clock-check";
export const id="dl_c538862e046d4a798091";
export const url=new URL("../icons/lucid_1-alarm-clock-check.svg?v=eccbf243c62f537c0ee1d7d4a144a6d82f62ab6b30159b9299ef73a4d977bf99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
