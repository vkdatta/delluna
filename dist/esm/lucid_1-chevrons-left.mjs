export const name="lucid_1-chevrons-left";
export const id="dl_bb40b34ea33544219b02";
export const url=new URL("../icons/lucid_1-chevrons-left.svg?v=0afddbb3c4c041b076ace5d98b3545173ac3f3b4437d7ccd18cc6f81976edd4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
