export const name="arrow_shape_up-fill";
export const id="dl_29e49f4531fe458785a3";
export const url=new URL("../icons/A/arrow_shape_up-fill.svg?v=320858c824f5b3afe7a683502e4533fd9923f41a830cd97e0884c84dbbb4d6b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
