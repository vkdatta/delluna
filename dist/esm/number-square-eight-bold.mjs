export const name="number-square-eight-bold";
export const id="dl_57a5b9ac347146d3bc42";
export const url=new URL("../icons/number-square-eight-bold.svg?v=caea66a7dcda89df63c851bc98143a8721da1efe9c8546f5ee8015831045689f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
