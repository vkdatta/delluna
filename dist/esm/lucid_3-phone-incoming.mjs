export const name="lucid_3-phone-incoming";
export const id="dl_5c076400a4164babaf5e";
export const url=new URL("../icons/lucid_3-phone-incoming.svg?v=7e762d7ad6223ad41609b273152e2817aa7f659bc1d62430c4bb28cec563ae0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
