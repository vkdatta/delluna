export const name="speaker-low-light";
export const id="dl_d85e1489f89ff55a4113";
export const url=new URL("../icons/speaker-low-light.svg?v=7ef93102e70256af985989cf0cae204a64321008846aae87e212c77b32f6a367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
