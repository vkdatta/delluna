export const name="hand-pointing";
export const id="dl_7f96f4ecb95c4818bb64";
export const url=new URL("../icons/hand-pointing.svg?v=7ac798cea220b3724bd2d1331b12d7519e02b775b1af1843df85040f0850de7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
