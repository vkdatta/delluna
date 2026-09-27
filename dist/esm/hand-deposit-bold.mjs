export const name="hand-deposit-bold";
export const id="dl_40c3d7502b1c4d80bff3";
export const url=new URL("../icons/hand-deposit-bold.svg?v=3969a75974206482b583d18a9e91c464876f311991e0a906c958d1f3295a7ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
