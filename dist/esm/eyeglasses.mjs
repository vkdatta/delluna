export const name="eyeglasses";
export const id="dl_96f572cdd4e14202a95a";
export const url=new URL("../icons/eyeglasses.svg?v=3d11174cf138f4704410c55fa1b15d656748f12859b0f9d349fa6a47c3506146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
