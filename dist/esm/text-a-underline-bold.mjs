export const name="text-a-underline-bold";
export const id="dl_3d4058d0fd26efdf354a";
export const url=new URL("../icons/text-a-underline-bold.svg?v=6d210bacdd78e8cb8eebd22d23b47d96d436ed7c832eca10842444ef11705626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
