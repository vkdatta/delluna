export const name="lucid_1-bookmark-plus";
export const id="dl_6d7d6222bdc74689be13";
export const url=new URL("../icons/lucid_1-bookmark-plus.svg?v=84b38ce149e5bf64967c199f8c55e5b3da2c1544004268d301ce34c595deb806",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
