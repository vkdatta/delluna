export const name="content_paste_off-fill";
export const id="dl_ddcad32b3e2916a71105";
export const url=new URL("../icons/content_paste_off-fill.svg?v=b39918749abd1b49e2c32bcc753ab7de5d7da2aac044b990525e5bd0ed1f56ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
