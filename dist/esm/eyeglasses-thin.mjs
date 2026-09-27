export const name="eyeglasses-thin";
export const id="dl_4e790f8a555a45ee8109";
export const url=new URL("../icons/eyeglasses-thin.svg?v=7784f3dbcbd5d5fbce27504e661cc66abaa36707e3df994b88c38be7d031f3eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
