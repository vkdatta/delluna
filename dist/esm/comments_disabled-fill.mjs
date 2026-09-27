export const name="comments_disabled-fill";
export const id="dl_b2abe0b2cda6547aa5da";
export const url=new URL("../icons/comments_disabled-fill.svg?v=8cb9f033a763744cb6cc2bedec97f0939e3244cc88eb1206db499b784ecef589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
