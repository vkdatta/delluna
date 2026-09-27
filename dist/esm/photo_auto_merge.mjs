export const name="photo_auto_merge";
export const id="dl_ea73207ec31b5e2b1f3e";
export const url=new URL("../icons/photo_auto_merge.svg?v=f5a48677ba95801da7f4111285d3c72d13805c21df40678060b2b8bce22514e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
