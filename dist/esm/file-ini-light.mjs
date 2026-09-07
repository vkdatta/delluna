export const name="file-ini-light";
export const id="dl_d2d867c741a84ef1a08a";
export const url=new URL("../icons/file-ini-light.svg?v=06be74b9060e332bdeec86ad4c573140fd4a2baac797aef12e7b49f78be35556",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
