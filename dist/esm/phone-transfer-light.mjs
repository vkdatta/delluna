export const name="phone-transfer-light";
export const id="dl_6cf28fd0137a4174b8be";
export const url=new URL("../icons/phone-transfer-light.svg?v=a930ecc2f94963e6a8627de7478cc5605084d4b3b7a98de26a083d591392ddfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
