export const name="less-than-or-equal-fill";
export const id="dl_b7812a039e29443c9b38";
export const url=new URL("../icons/less-than-or-equal-fill.svg?v=7c33d2557ce8929beaeb1d211fdcd5c70b2d1cf1381c3713b1a6ee3cec7e138c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
