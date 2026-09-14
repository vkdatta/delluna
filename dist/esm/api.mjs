export const name="api";
export const id="dl_6ca8698cb26242fa8fef";
export const url=new URL("../icons/A/api.svg?v=bd08f530b5e6b71603c1b77f08dd45d6cc6390fae951d94c46e4c4f92c2b2b26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
