export const name="magnify_fullscreen-fill";
export const id="dl_08e164c78dde43a28c73";
export const url=new URL("../icons/magnify_fullscreen-fill.svg?v=cde0cf37a462a2174d24b9f3aa1bf104275437b2751e9c22a25198887e38df61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
