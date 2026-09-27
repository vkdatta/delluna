export const name="local_police-fill";
export const id="dl_50c5fa15f6f10ddaa541";
export const url=new URL("../icons/local_police-fill.svg?v=fb6897605ffdbd72291be96daf38d8ea1470bfaa215e8a5c400fb15554b3ded3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
