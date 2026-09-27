export const name="newspaper-clipping-light";
export const id="dl_783c7b36b7b7418db36b";
export const url=new URL("../icons/newspaper-clipping-light.svg?v=d07d01505ac91d4f3244afa94f4bb1d4fd7ed4d7ecd4ef69792e8dd242ab7869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
