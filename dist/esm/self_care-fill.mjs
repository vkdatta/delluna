export const name="self_care-fill";
export const id="dl_6843bb6abc1948269cb9";
export const url=new URL("../icons/self_care-fill.svg?v=54a247c24b86c86d4af49c1ff75970907674a02b5df424e8ad7546be086fdc89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
