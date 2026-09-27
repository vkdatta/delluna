export const name="star-cross";
export const id="dl_2fe460928058ae7c3f38";
export const url=new URL("../icons/star-cross.svg?v=270f781801226332c97a1044a4164e00ea81c4da0dd8ee00a90d9694d359417d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
