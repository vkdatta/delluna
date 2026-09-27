export const name="responsive_layout";
export const id="dl_b3d02e8699a3234b1d3f";
export const url=new URL("../icons/responsive_layout.svg?v=3ea87cdf0881fd184038fd7ec9b7a7d5690ecc0969d70894e48cfc98447d953d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
