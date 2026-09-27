export const name="lucid_2-crop";
export const id="dl_2a265be51fa14db5aa32";
export const url=new URL("../icons/lucid_2-crop.svg?v=eed933629c530be6790ac060232f7e058ee2e4c8df7348d8091d19d356b7817b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
