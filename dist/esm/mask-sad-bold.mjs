export const name="mask-sad-bold";
export const id="dl_1060a7db79d041d1bd23";
export const url=new URL("../icons/mask-sad-bold.svg?v=0a74c6377b33400be30bdd339426a07d727a2672a193b4e4a024f6fa4fc82253",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
