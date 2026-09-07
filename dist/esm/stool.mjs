export const name="stool";
export const id="dl_72bb4d4409f940879930";
export const url=new URL("../icons/S/stool.svg?v=a49409f096a56be3884ebc365d5cb8907db67050fdbd2ec59cfe82619affdc0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
