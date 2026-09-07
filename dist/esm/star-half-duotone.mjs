export const name="star-half-duotone";
export const id="dl_6c3bf6344909431194e8";
export const url=new URL("../icons/S/star-half-duotone.svg?v=13b37ca8805571db874b894e74c2b16c8c35b606be57531d727e0bb84c49bcf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
