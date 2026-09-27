export const name="content_copy-fill";
export const id="dl_9aeffdabd2af85676fcc";
export const url=new URL("../icons/content_copy-fill.svg?v=91fcf0312d7190b2d5e1fd8bc41abb60f4b86e99ffff903070f9fa4ed2d5abaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
