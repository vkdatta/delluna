export const name="roofing";
export const id="dl_65500d5f2ace41fcb866";
export const url=new URL("../icons/roofing.svg?v=41fcda0a3b0e5613fc758c0b85ed9e307f27e6200e368820c2d33747ab0c8e9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
