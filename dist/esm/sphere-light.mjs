export const name="sphere-light";
export const id="dl_aa5a6a506c1b9aae69c9";
export const url=new URL("../icons/sphere-light.svg?v=fdedb3384bf1caacc2ee9651c88e18d3e0e2d19c6aad24d111ae8ba0b1f74ab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
