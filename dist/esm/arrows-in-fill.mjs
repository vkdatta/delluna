export const name="arrows-in-fill";
export const id="dl_2310e4faddc14d2aa661";
export const url=new URL("../icons/arrows-in-fill.svg?v=699b3b50536a76689e173c35205173997bf70ab958c5a3af9b61e6fd6d74fa72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
