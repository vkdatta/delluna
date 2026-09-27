export const name="subdirectory_arrow_right-fill";
export const id="dl_7ae28314cfce7c288634";
export const url=new URL("../icons/subdirectory_arrow_right-fill.svg?v=647ef45215bc1bc7ade206f912c40ca0627ffd1ea52c3bef092f99755ecb5365",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
