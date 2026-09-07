export const name="gps-fix-bold";
export const id="dl_21c0291c0f6d4981acce";
export const url=new URL("../icons/gps-fix-bold.svg?v=bd81d7d36f7992f6ac02817300c0eef16e2263cf699793f5e64506c2ae17185a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
