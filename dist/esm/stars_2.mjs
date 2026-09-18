export const name="stars_2";
export const id="dl_3d17fb09b88b44789bf3";
export const url=new URL("../icons/S/stars_2.svg?v=132ccf3b44582d4caf050c141d1849e466419efc287ab714edecb1cb8344bab6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
