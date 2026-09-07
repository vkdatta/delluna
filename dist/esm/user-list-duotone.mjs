export const name="user-list-duotone";
export const id="dl_422cdfb584e3418fbd90";
export const url=new URL("../icons/U/user-list-duotone.svg?v=55fcbb485f97c92ef9268b54378b56fae92374ddf1e8fd2ab8a7e4c546179b7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
