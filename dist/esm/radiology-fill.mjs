export const name="radiology-fill";
export const id="dl_fca348379fcc8cb266e7";
export const url=new URL("../icons/radiology-fill.svg?v=411661047ec72515abf4520f9025bc8a4fe47fd230949924bbfe2bc8779b3948",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
