export const name="road-horizon-fill";
export const id="dl_82c6830735284e40bafd";
export const url=new URL("../icons/road-horizon-fill.svg?v=2ea97903cb1d4b55069ad7350fada00059be4359013e3036f59c6ad5f1247eb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
