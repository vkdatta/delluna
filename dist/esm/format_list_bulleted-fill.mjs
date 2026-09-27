export const name="format_list_bulleted-fill";
export const id="dl_734ebe77760ff63248d6";
export const url=new URL("../icons/format_list_bulleted-fill.svg?v=45b8be423be5e522d153033f3785697a7df017f8665f509b37cbdaefec3108ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
