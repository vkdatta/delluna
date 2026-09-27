export const name="lucid_3-rocking-chair";
export const id="dl_64cc2fa125d24f6783ee";
export const url=new URL("../icons/lucid_3-rocking-chair.svg?v=ecc35e296d9525db835d778b9ec30c0d566d0c3f2dc8849d03bd7f2434ebd842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
