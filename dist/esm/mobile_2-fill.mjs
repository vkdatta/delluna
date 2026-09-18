export const name="mobile_2-fill";
export const id="dl_76cc0e6345bf4229921c";
export const url=new URL("../icons/mobile_2-fill.svg?v=4d161285933dc3958b2c2efbb7fcabb44f4904599fc0773d0d54ce7092996b9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
