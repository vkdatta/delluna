export const name="file-text-thin";
export const id="dl_98a5cb612abe4fcb8c8a";
export const url=new URL("../icons/file-text-thin.svg?v=5407c822c0a525cea221f94b2ce6377307a7cafa2f85fe50897256f7c99270fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
