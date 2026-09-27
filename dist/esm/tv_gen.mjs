export const name="tv_gen";
export const id="dl_a5bfc3e115abd0f793ad";
export const url=new URL("../icons/tv_gen.svg?v=a10cf4f1a3c158f0f951b70549153ec29db5647de923a1911286f43f98da2cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
