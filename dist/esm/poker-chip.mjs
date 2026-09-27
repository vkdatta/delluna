export const name="poker-chip";
export const id="dl_5e5f68b6b0ca49b68aae";
export const url=new URL("../icons/poker-chip.svg?v=9b57ecefcc7ad6339a44b26ef37866ad5fb413877a7f1285124a8a745b318b28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
