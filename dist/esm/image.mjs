export const name="image";
export const id="dl_0e16e918a3710bd22e61";
export const url=new URL("../icons/image.svg?v=3226593e9b252f1863f7f3e5af12a59d427d4617c2df2b6ec5d0b409a28b2f39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
