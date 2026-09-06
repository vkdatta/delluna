export const name="eye-closed";
export const id="dl_57a3434e217a4ef6b9ed";
export const url=new URL("../icons/eye-closed.svg?v=2d926529e76db403f372ec80e93606828eaa012fb8645ce28b22e95a16fa87e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
