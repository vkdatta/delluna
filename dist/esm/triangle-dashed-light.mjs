export const name="triangle-dashed-light";
export const id="dl_3e380ed51e5687bf6be9";
export const url=new URL("../icons/triangle-dashed-light.svg?v=8a400d52e1fc1e6f60534e3a95326761e23fd07b6441196a8dd2d233aabd1e4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
