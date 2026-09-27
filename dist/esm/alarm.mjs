export const name="alarm";
export const id="dl_8477b5ef4f8f4ca5853a";
export const url=new URL("../icons/alarm.svg?v=2993e4929f44ef79643acdc01db5c303be2a1578a10c8fca0bc934a735e9522a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
