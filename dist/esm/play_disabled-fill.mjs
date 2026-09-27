export const name="play_disabled-fill";
export const id="dl_d7fa626e98b9059b2062";
export const url=new URL("../icons/play_disabled-fill.svg?v=1b7d4fe7ae4220bc288173397a4218e16d1883ebd1645e25574428613df67051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
