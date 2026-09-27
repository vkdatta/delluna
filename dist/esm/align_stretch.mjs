export const name="align_stretch";
export const id="dl_4f30c4ce5de034519641";
export const url=new URL("../icons/align_stretch.svg?v=824c1e08e04ca5584a7fbff03626d2880d60f9694ef1692a550a2bc0ab878c4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
