export const name="headphones-duotone";
export const id="dl_ab8927e2f18c40da9e03";
export const url=new URL("../icons/headphones-duotone.svg?v=41d43ed06a19028c46a57ecfb54077bfb4c2c7130bd6e159773e37859d2f4a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
