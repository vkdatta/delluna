export const name="image_search-fill";
export const id="dl_475dcc2eb8eeec83aaea";
export const url=new URL("../icons/image_search-fill.svg?v=eca1ac4f2b85115f80ce0438252939688d2616f808b1b95f99987fa7debfc5a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
