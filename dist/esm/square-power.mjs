export const name="square-power";
export const id="dl_e0e9f3c2255446c89e79";
export const url=new URL("../icons/square-power.svg?v=52bc99c99f72dc8f92383ec80bab0b9f5128d25ef3f373b910a18ca788290958",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
