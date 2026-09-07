export const name="arrow-line-left-light";
export const id="dl_c13c957894f84b9ea331";
export const url=new URL("../icons/arrow-line-left-light.svg?v=1373e35fd20de0cedccf90bfcb22a472a1d15bd1eb52a8b88ea9bbd38b2547d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
