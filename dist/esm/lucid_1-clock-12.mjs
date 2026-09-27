export const name="lucid_1-clock-12";
export const id="dl_259ef765944146eba3a8";
export const url=new URL("../icons/lucid_1-clock-12.svg?v=1e7cf00c2c52e1efa75f21730154e65b630a4a3c279cdd8fe6e7ccb9f6330089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
