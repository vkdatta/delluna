export const name="flag-banner-duotone";
export const id="dl_4ad1997974cf4456bcbd";
export const url=new URL("../icons/flag-banner-duotone.svg?v=e70b2eaf8df72387c8e44fa8302c178eb086a773be73804a9cea3d17891c7adf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
