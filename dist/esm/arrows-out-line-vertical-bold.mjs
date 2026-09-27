export const name="arrows-out-line-vertical-bold";
export const id="dl_1e0cd554c44b470bbb34";
export const url=new URL("../icons/arrows-out-line-vertical-bold.svg?v=6054d1307c1cc3d2c0f9eb59341b32a5a3357fe24035299e8d86efd6a5dfd0b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
