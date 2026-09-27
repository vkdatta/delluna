export const name="globe-x-thin";
export const id="dl_39c6235b6f684337b008";
export const url=new URL("../icons/globe-x-thin.svg?v=07333d5c662cf3cd7dbb658def327f0186d7881c5dd37d59c3686e238f7affed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
