export const name="skip-forward-duotone";
export const id="dl_47a2ea0df0226707dc65";
export const url=new URL("../icons/skip-forward-duotone.svg?v=dd5e2be9c927107968847ae95361834f622d531db9c4f9a07b97c052444ff57e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
