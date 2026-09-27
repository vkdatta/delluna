export const name="tag-bold";
export const id="dl_a865539ce80ca0c46770";
export const url=new URL("../icons/tag-bold.svg?v=064999578a9f9c6a2132c414a501cc1526e3e2cc696df66bc7fa2d89d1254cac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
