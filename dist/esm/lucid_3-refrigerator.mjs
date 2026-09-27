export const name="lucid_3-refrigerator";
export const id="dl_87e4a63bb4a6401dbe08";
export const url=new URL("../icons/lucid_3-refrigerator.svg?v=58c9cb50c5c93af94711a3e7649cc94667dc9a15f6ec67e118d6947467a21518",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
