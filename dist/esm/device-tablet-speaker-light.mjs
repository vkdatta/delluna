export const name="device-tablet-speaker-light";
export const id="dl_0ebbb7c69ac14d8da3a3";
export const url=new URL("../icons/device-tablet-speaker-light.svg?v=205a1231105eec922315ee9df679860b3c1110fe02bf3ddc2e0b5f4fd41a52a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
