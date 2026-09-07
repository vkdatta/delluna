export const name="filter_down_small";
export const id="dl_a313cc0e47364754b7cc";
export const url=new URL("../icons/all_60_named_svgs/filter_down_small.svg?v=61cdac238bfa3a15482c818816c98a52a8362270e924b4293eaf83ae821fb25d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
