export const name="closed-captioning-bold";
export const id="dl_805677d3225f4fa2a397";
export const url=new URL("../icons/closed-captioning-bold.svg?v=b73fcdaebf64e5234c8081b2c8459b0afb5b335af28d757fcbd01e80c5446e10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
