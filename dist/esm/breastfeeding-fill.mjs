export const name="breastfeeding-fill";
export const id="dl_9df4831cf8b76314589a";
export const url=new URL("../icons/breastfeeding-fill.svg?v=1977a68c6563a55249a0885942e167274f296ed2e741a402f85230e42f4373fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
