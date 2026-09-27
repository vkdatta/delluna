export const name="house_with_shield";
export const id="dl_101cb8a9168f0217ef7f";
export const url=new URL("../icons/house_with_shield.svg?v=051ee3eb099a60d05854e36ad37d82dcb844233eb1f8d366856e235d29e79a36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
