export const name="prayer_times";
export const id="dl_6537e59a058e315c5116";
export const url=new URL("../icons/prayer_times.svg?v=bdf9b8425732f01d4176d33e82ced22386a87e7b9969279f95524138b3c53214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
