export const name="arrow-u-right-down";
export const id="dl_708a6b5d06fb4620ab87";
export const url=new URL("../icons/arrow-u-right-down.svg?v=2097053e342c007615e56cc8166c0d7b608cfaf4dca05aad6f3586d165f35738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
