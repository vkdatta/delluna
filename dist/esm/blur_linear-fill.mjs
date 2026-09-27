export const name="blur_linear-fill";
export const id="dl_9ff13591b84b8e126501";
export const url=new URL("../icons/blur_linear-fill.svg?v=8b9881092dee88bce658a06c62391dfdfe1d7b75e40e873b5ece3b97c72c2593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
