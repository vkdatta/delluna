export const name="safety_check";
export const id="dl_91d53634bf4a35187c68";
export const url=new URL("../icons/safety_check.svg?v=4461737bb9c15de436ed5438afc46d1d096352f6017191f7bc1685db841e2852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
