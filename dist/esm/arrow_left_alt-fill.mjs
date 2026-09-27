export const name="arrow_left_alt-fill";
export const id="dl_9f97fe2fe9c3526b3d41";
export const url=new URL("../icons/arrow_left_alt-fill.svg?v=227126b409ad21f9128526dfd8606b1517af7eebbd42074382a2acc34e7e7e02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
