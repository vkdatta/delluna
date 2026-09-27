export const name="arrow-u-down-left";
export const id="dl_8e6fba00d6614d39a28b";
export const url=new URL("../icons/arrow-u-down-left.svg?v=e797f20dcfdd3692838a72473932716166755c49aff971265a17d59b372a841d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
