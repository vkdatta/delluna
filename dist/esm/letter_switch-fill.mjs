export const name="letter_switch-fill";
export const id="dl_ede81106c09f453aa213";
export const url=new URL("../icons/letter_switch-fill.svg?v=f74f4276b7710207efdf2e33a17e8a90b013baf0ea9a1935a4b09932a634ff47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
