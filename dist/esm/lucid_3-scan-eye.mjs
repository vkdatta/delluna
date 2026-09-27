export const name="lucid_3-scan-eye";
export const id="dl_6ba6f27ff8a245f0a9cd";
export const url=new URL("../icons/lucid_3-scan-eye.svg?v=4e6dd374a9d79b2ae62409b132e85f18cfa0b02477c01bc7a8b51360220450ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
