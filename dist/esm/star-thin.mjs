export const name="star-thin";
export const id="dl_bb0fb22128c2685c99d2";
export const url=new URL("../icons/star-thin.svg?v=de3efe9dc7aa16a0cf4336f8c5857df29e0c20735ad213f4f69756b84a9da4ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
