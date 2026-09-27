export const name="push-pin-slash-light";
export const id="dl_52e6c12c5a1946a4904d";
export const url=new URL("../icons/push-pin-slash-light.svg?v=30344e6e6f6ebefefa3f30ea7104d20d25333331bc7ee9f3a0aa01a2e3599f97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
