export const name="business_messages";
export const id="dl_3d3326fccf7339e88aee";
export const url=new URL("../icons/business_messages.svg?v=f6b1b0a1ffa7588f0d714924d610c20c8a0efd4f499f39ca4670dd5df5e782a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
