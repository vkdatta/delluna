export const name="skype-logo-light";
export const id="dl_82b65dd4fd19bf92ac2e";
export const url=new URL("../icons/skype-logo-light.svg?v=a265a8c4d0a6370c923892d0cada32fcec5c8a0784a0dc140ae210e3223e2a6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
