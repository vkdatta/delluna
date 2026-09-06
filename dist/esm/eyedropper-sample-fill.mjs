export const name="eyedropper-sample-fill";
export const id="dl_c619eaa41c7a4b9cb41c";
export const url=new URL("../icons/eyedropper-sample-fill.svg?v=78c62ff76891b2f5d5300e321b0b8cea2d1ac9929584c725aecbd9b74ac26299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
