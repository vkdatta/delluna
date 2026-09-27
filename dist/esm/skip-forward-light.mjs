export const name="skip-forward-light";
export const id="dl_3bbe1b1c7b197ab51989";
export const url=new URL("../icons/skip-forward-light.svg?v=ffe8a362e041147a1c91273e0bc32a7ab2c356fdb8ae93c9b809f55a1509bc7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
