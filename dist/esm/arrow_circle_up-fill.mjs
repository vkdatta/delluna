export const name="arrow_circle_up-fill";
export const id="dl_9e4b4480126fd48ab35a";
export const url=new URL("../icons/arrow_circle_up-fill.svg?v=590ab940d0468bc813624d1bc377e413864cc6a32f7436ab42ca0fb70d35924a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
