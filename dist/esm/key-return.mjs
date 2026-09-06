export const name="key-return";
export const id="dl_198e62c149104800b1ba";
export const url=new URL("../icons/key-return.svg?v=fbdd2134fb315153f5e33c78f7f2677556d2ad4006d4a274de11f61b06daf558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
