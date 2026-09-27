export const name="smiley-nervous-thin";
export const id="dl_27f1de2ed4da75244c76";
export const url=new URL("../icons/smiley-nervous-thin.svg?v=0ef91a9754dd2236c353958cd11f284d0144f600e7ca18f73a96ebe6a545d48f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
