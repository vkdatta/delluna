export const name="subwoofer-fill";
export const id="dl_bc2ff5b144518e6cdf91";
export const url=new URL("../icons/subwoofer-fill.svg?v=b372bd6f36ecca4fc775b13a52bf0f58d5ee57b72ae1dcffc2490950bb3770f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
