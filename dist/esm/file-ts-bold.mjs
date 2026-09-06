export const name="file-ts-bold";
export const id="dl_0dac66fcc84441cfb3cf";
export const url=new URL("../icons/file-ts-bold.svg?v=164e464ce5b81fb68e8702eddfd70e138b2d8e28962c623e0891c8125f584d8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
