export const name="broken_image-fill";
export const id="dl_c44538612c6fc3c37dae";
export const url=new URL("../icons/broken_image-fill.svg?v=670f42967c3eede74d815989b12cbef8ce8d7d3d572264e62ae2c2fa04f5e4f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
