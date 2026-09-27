export const name="contactless-payment-light";
export const id="dl_cf73842fa19f459195da";
export const url=new URL("../icons/contactless-payment-light.svg?v=663405473c86559bf0b71f4c6908294acade84bdd4b04adb35f85e1faef95788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
