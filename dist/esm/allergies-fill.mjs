export const name="allergies-fill";
export const id="dl_28c00832bb66d7387765";
export const url=new URL("../icons/allergies-fill.svg?v=a84cd8e7e752f9bc5f4244c825372b787f659cde2104d31cf0f6e7c79d520b51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
