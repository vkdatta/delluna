export const name="unite-square-duotone";
export const id="dl_36f1d91dc19332abc2fc";
export const url=new URL("../icons/unite-square-duotone.svg?v=9d7700ea9f04cd25c8b9d074bbfa7a358841e3914cf030094e4cf4370239394a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
