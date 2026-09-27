export const name="user-list-duotone";
export const id="dl_1913faba3355d9601070";
export const url=new URL("../icons/user-list-duotone.svg?v=5c0b7ee2aa06a989ef9738c638f31559dcbeb0ca91a609f4fcfed383a2eea442",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
