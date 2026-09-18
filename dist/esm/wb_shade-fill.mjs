export const name="wb_shade-fill";
export const id="dl_843f4fea3eaa4905a359";
export const url=new URL("../icons/W/wb_shade-fill.svg?v=021412a222b25bd9a668d401b5ef949f98e7fc5708c6ec380c07f70581016812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
