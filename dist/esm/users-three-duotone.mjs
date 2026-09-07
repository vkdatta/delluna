export const name="users-three-duotone";
export const id="dl_599412a3967a4fc0a95d";
export const url=new URL("../icons/U/users-three-duotone.svg?v=8df43f36d7329c365afa0672e2367af16a7bfc7d8820838dfe7358cce1a76aba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
