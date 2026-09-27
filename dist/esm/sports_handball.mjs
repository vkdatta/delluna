export const name="sports_handball";
export const id="dl_60fc7520e4877c721770";
export const url=new URL("../icons/sports_handball.svg?v=acff683f6875378dae1ebed525a973e4739ef36c4452e0f032676eb42c1d1951",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
