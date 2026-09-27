export const name="arrow-fat-lines-down-fill";
export const id="dl_0cc59d3f68074393bca2";
export const url=new URL("../icons/arrow-fat-lines-down-fill.svg?v=331c5da0d267c5f13528530f937c9a0a005dcf05873bd5fcb0ae53fdfb2d26c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
