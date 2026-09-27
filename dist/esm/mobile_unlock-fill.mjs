export const name="mobile_unlock-fill";
export const id="dl_5cc82abea55318e6140a";
export const url=new URL("../icons/mobile_unlock-fill.svg?v=1a831c27f2c0a16a95022c2dcfbc5dd01eb2e544c49356b3cb9a90b379ab1eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
