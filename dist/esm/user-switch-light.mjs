export const name="user-switch-light";
export const id="dl_a2aba3b41c4449b8920a";
export const url=new URL("../icons/U/user-switch-light.svg?v=9b2d98b5000757c97012753607357008ed5eb74323138ac5af1d97bf97c7b8ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
