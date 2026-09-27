export const name="man_3-fill";
export const id="dl_c9a39de3efd61ac1586b";
export const url=new URL("../icons/man_3-fill.svg?v=d9b0f94ee59a1584868132c63dc710ea5a05d5a15f072d84fae483037208affa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
