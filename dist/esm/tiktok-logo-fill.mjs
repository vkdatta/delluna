export const name="tiktok-logo-fill";
export const id="dl_bafaa31d92cd10095a67";
export const url=new URL("../icons/tiktok-logo-fill.svg?v=77bbda378bb31e2dda79d3b3f26c116f7eceea2088acba310e1f8dd61f0f46ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
