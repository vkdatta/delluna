export const name="straighten";
export const id="dl_9e499de2ab11ecd67048";
export const url=new URL("../icons/straighten.svg?v=c6a1d6ab40290faab6b942f5dc0da2ab6d69d04c57f3d7dec9229f4c04caf23f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
