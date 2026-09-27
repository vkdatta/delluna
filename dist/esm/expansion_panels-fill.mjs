export const name="expansion_panels-fill";
export const id="dl_2b29f5c42976f1d57c1f";
export const url=new URL("../icons/expansion_panels-fill.svg?v=c6b4f473dc62aaaa98c5e0261df81e917c7d602b286757d0d7c51b34532f40c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
