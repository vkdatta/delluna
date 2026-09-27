export const name="joystick";
export const id="dl_eb3ab2c2d86fe057ed7f";
export const url=new URL("../icons/joystick.svg?v=ce7d9a2d556e17cc7f8e7287570ae93009c49859d62165b17a0f51dbb48ed283",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
