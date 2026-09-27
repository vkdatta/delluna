export const name="hash-straight-thin";
export const id="dl_bfb5324fec7046eca826";
export const url=new URL("../icons/hash-straight-thin.svg?v=4a538a454c1d140d4e3b27a9f32b762ce5f3aa95c36748869bb630db594a195d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
