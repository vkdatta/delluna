export const name="arrow-u-down-right-thin";
export const id="dl_f4896bf3a24c4351a42c";
export const url=new URL("../icons/arrow-u-down-right-thin.svg?v=93e997f37e566d4a1554ecbb2ed2214680daf5b3208f8acdc19bc580e575a373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
