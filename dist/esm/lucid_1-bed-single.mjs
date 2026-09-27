export const name="lucid_1-bed-single";
export const id="dl_4bcc2446ca83443bab7d";
export const url=new URL("../icons/lucid_1-bed-single.svg?v=4836e873902936ebc8c9fe61be2034bf7f8c7022c4a2971f5aa1e494c9a648a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
