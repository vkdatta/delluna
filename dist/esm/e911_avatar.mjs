export const name="e911_avatar";
export const id="dl_237ced4d68f39949017e";
export const url=new URL("../icons/e911_avatar.svg?v=72aa70c6eb350bc99b5aa14aec44306cd0bbc9cce48341e6bc95339037dd6ed1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
