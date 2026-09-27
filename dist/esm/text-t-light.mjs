export const name="text-t-light";
export const id="dl_c0ebd3a70b41b50df48c";
export const url=new URL("../icons/text-t-light.svg?v=228dd98f8e0501022b0734f2d1d49c9314e2ff02eee2e43d83411e97f47097fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
