export const name="greater-than-or-equal-thin";
export const id="dl_2d61a82197ab4bb797c2";
export const url=new URL("../icons/greater-than-or-equal-thin.svg?v=eacfd443e71ac77b77f78bdbc9f651ab5a7edac1fa9e067ebeff93b39937c4da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
