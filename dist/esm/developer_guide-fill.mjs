export const name="developer_guide-fill";
export const id="dl_480d8e0d20dab342eaf8";
export const url=new URL("../icons/developer_guide-fill.svg?v=7f14c1cfa3b4358e7f5e7eb96b30d361f583682f6deff5d1cd4f9972511bfab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
