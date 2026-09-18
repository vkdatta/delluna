export const name="my_location-fill";
export const id="dl_a7c0a5a1f5a944daa0ad";
export const url=new URL("../icons/my_location-fill.svg?v=7f22358b6c92a7572b0154285fe99bc8cf5cc51e2b3f436a96dcef89d9da41f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
