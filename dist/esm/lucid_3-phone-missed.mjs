export const name="lucid_3-phone-missed";
export const id="dl_371cff3fb83642a786f0";
export const url=new URL("../icons/lucid_3-phone-missed.svg?v=262d764ed0a528a8987b459f5d009c6eb888acc1f4a88db6d1996c63367c8a21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
