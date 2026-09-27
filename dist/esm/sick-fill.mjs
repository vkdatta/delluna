export const name="sick-fill";
export const id="dl_f02e7cc597ef07a8a0c5";
export const url=new URL("../icons/sick-fill.svg?v=9e3885f4802d577e976e2dcc54014317cd724d92a93d1b28f48deb6f2edda3cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
