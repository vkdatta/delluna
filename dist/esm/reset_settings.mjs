export const name="reset_settings";
export const id="dl_b5d0715adeea6f5651dd";
export const url=new URL("../icons/reset_settings.svg?v=c544ec56698e079e616aa00da9fbd07b64b1a72801add1db7366e2bc871ae3f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
