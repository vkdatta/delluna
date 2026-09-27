export const name="google-logo-bold";
export const id="dl_4d3b0e34e72a41f28e32";
export const url=new URL("../icons/google-logo-bold.svg?v=e01471e1946e90059801d102c0c1ef1878f5e2870234ea196e53eeb01a575bb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
