export const name="align-top-simple-bold";
export const id="dl_007668d6eedb4552af9c";
export const url=new URL("../icons/align-top-simple-bold.svg?v=cccbcfce2ce3a104db63ccdfe419a395b3212aa5ed3d05f045cf05d709baa2cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
