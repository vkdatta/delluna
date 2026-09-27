export const name="pinboard";
export const id="dl_42af0cb2395ba313c8dd";
export const url=new URL("../icons/pinboard.svg?v=e6a7e0914f1e55b081203f733f74959d62e5fe161a98440860f0ba23acdb2c11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
