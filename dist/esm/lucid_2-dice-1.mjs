export const name="lucid_2-dice-1";
export const id="dl_85aabfbcdf284c1a944e";
export const url=new URL("../icons/lucid_2-dice-1.svg?v=f836fbe67c77dc9112bacd7c64a6c427d5469bd0a98ff62d88610a20a1447ad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
