export const name="envelope-thin";
export const id="dl_7824c9e0f2b24ceab1e4";
export const url=new URL("../icons/envelope-thin.svg?v=e89fba0317bf43c486fe3596a3997d08376f9ef49a6b23312f12f916a87a1479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
