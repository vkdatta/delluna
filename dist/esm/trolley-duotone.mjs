export const name="trolley-duotone";
export const id="dl_66f26449a78954f23cb9";
export const url=new URL("../icons/trolley-duotone.svg?v=93f65606af401e0b0ab95ecfd3c5ac1d81d61280cd0fe7cd058a6beb3b6358db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
