export const name="highlighter-circle-thin";
export const id="dl_79faf894e13d48b08a23";
export const url=new URL("../icons/highlighter-circle-thin.svg?v=1a24f8506b13107961212cdc2aee4d424047d18020f55c0e35dfc2457a8d481e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
