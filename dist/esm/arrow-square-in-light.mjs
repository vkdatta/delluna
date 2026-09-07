export const name="arrow-square-in-light";
export const id="dl_697b8c3924e648c2a548";
export const url=new URL("../icons/arrow-square-in-light.svg?v=d1bc4a933e19054ca227e49aa0f12bed524f448b78eb3d0bc3b96c0b320e2d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
