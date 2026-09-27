export const name="text-h-five-duotone";
export const id="dl_3a5a8704cec40f254233";
export const url=new URL("../icons/text-h-five-duotone.svg?v=b1053dc8a9705d6b096475db76d2c83e6dc096df6a5b55856a6173d98dbad078",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
