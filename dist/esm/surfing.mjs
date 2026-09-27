export const name="surfing";
export const id="dl_b1253156fcd183616605";
export const url=new URL("../icons/surfing.svg?v=5bcbf62f4d295f004af4989430e841d5bb37ce4abeb03a27dec3110715800999",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
