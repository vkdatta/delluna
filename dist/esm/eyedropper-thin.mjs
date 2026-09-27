export const name="eyedropper-thin";
export const id="dl_1f41524820104fd8a481";
export const url=new URL("../icons/eyedropper-thin.svg?v=25610eac85f17faa5f24994a1a491f9f6066e6343ab5e59421360b079c069489",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
