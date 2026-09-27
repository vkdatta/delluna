export const name="roofing-fill";
export const id="dl_a8e2b0be1761b40674b3";
export const url=new URL("../icons/roofing-fill.svg?v=a5f9884e2f311a995122dd381463c0a6b6f81375bf0dbca47f85276db9ca12bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
