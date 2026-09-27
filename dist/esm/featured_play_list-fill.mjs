export const name="featured_play_list-fill";
export const id="dl_2daf6ddd4ecc60b9a63e";
export const url=new URL("../icons/featured_play_list-fill.svg?v=e42765d1c14d287280d27d4bd86a110cb8dff45c42332e809ec7c47b2ef3eccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
