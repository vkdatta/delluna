export const name="lucid_3-save-all";
export const id="dl_59580d42e52d45e88e6a";
export const url=new URL("../icons/lucid_3-save-all.svg?v=9d58f60e185f08e204ebc9ddd8bf2ea5250fa221b1861aa63927e66781f49767",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
