export const name="heart-half";
export const id="dl_af454886685545ef9313";
export const url=new URL("../icons/heart-half.svg?v=467fbf584a8145a55d32417955f35fdbfd45ae59a937b37a6f8e7f2af8e5971f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
