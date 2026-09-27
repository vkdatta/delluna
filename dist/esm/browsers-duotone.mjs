export const name="browsers-duotone";
export const id="dl_845eacb89a9749f9af90";
export const url=new URL("../icons/browsers-duotone.svg?v=f7461821ac2370b43fda5111cd5f6447918aa0e831626c6e21423e7189fd5a24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
