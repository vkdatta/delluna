export const name="password-light";
export const id="dl_3dfb72b7eaad48e9b732";
export const url=new URL("../icons/password-light.svg?v=52aa664884482716b68361bcf8dddac9a3effe0819682462d65e4c505a31e985",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
