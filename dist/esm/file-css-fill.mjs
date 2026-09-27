export const name="file-css-fill";
export const id="dl_c3c0759d69134b7e98c4";
export const url=new URL("../icons/file-css-fill.svg?v=f180ffff5d4d5e028a22e85ce79b51df8731bbc8700815d113fc31d08efbd716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
