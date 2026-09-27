export const name="lists";
export const id="dl_480fb0dce407b668dcb3";
export const url=new URL("../icons/lists.svg?v=c10b11c1788a47cccdae720fe9f16ce99a56bd8731f99709b65ad9de3a832dad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
