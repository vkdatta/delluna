export const name="line-segments-light";
export const id="dl_ce1463e7f5a748b985f0";
export const url=new URL("../icons/line-segments-light.svg?v=55b51543564813d797139925169ff5193a1e8e60607199598608a9cadc4924e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
