export const name="battery-charging";
export const id="dl_67a9e0c8093042c0a9ef";
export const url=new URL("../icons/battery-charging.svg?v=0a9c5272fda2ff677bee1a7941a8e88b6ac0c49add41f7f67d8ac22503f72307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
