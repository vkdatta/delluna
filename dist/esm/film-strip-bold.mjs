export const name="film-strip-bold";
export const id="dl_ae7ae4335bf145769703";
export const url=new URL("../icons/film-strip-bold.svg?v=6f6fedf0e86cbb039dc374aaba14e84453dd7e26c99a702f5dc7fda2586a29d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
