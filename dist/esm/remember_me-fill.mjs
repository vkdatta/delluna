export const name="remember_me-fill";
export const id="dl_46bffe41b12248b89f8e";
export const url=new URL("../icons/remember_me-fill.svg?v=b0f9605d2bda4ec881904b59669a09e9cc0819e91db9b0edb497c1cae7ad5d7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
