export const name="hourglass-high";
export const id="dl_3b548ce8e1924beda6fa";
export const url=new URL("../icons/hourglass-high.svg?v=67254e428171e99bf6d4f4592d993cd76da923bac0834238a7cd817873fe141f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
