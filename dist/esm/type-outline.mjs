export const name="type-outline";
export const id="dl_6205dd096ea84f9b88cd";
export const url=new URL("../icons/type-outline.svg?v=a09a6fdaa997958821edd0a68ecdd70656d7b60d4abf1da1a851001c9f66e5c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
