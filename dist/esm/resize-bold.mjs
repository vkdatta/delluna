export const name="resize-bold";
export const id="dl_9632313474774259b99e";
export const url=new URL("../icons/resize-bold.svg?v=397ae9f901e25704e84954df99e8c82f9b80f88849e65806ced7b8df8cb2fe28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
