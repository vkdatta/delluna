export const name="co_present-fill";
export const id="dl_107e7db4874a6792d6d7";
export const url=new URL("../icons/co_present-fill.svg?v=bcc0fb4ebf666f3ca203aaf209ea41f184c07367d94742d635020a34823dc6a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
