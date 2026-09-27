export const name="arrow_drop_down_circle";
export const id="dl_700f072e8e029f10dffe";
export const url=new URL("../icons/arrow_drop_down_circle.svg?v=41a1ac422bfb40447f3e144c18a98f14f3b54dbb6cfc28f49c6bd24047b7adcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
