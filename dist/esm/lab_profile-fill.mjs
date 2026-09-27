export const name="lab_profile-fill";
export const id="dl_96be540dde61d1eda459";
export const url=new URL("../icons/lab_profile-fill.svg?v=4b5d18ff4d7e6d849e9396519c830ed5b57387aaaabbe6463a7c87dc0429f85a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
