export const name="card_travel";
export const id="dl_37384c26c0d453753e26";
export const url=new URL("../icons/card_travel.svg?v=12f7db9b11d1860039a1ae646064ac3ad427d8110ad83ef41da3bb24f386293c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
