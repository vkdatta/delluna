export const name="phone-pause-thin";
export const id="dl_e3c68b642c284001aa34";
export const url=new URL("../icons/phone-pause-thin.svg?v=69910cad504318513c6e8af51d4c8ed3894aa7ea3036fb9a91194c64d884dee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
