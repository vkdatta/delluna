export const name="arrow-u-right-down";
export const id="dl_708a6b5d06fb4620ab87";
export const url=new URL("../icons/arrow-u-right-down.svg?v=2ebbf07dc41a3145b50ae8dc80de8cf1bd538206348ea766e7bd87482550e6f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
