export const name="water_drops-fill";
export const id="dl_0d42acb3a38a5a577e8f";
export const url=new URL("../icons/water_drops-fill.svg?v=70ad1591df1477741fdce627a88fac7a177f84d326cc5afc4cfa7891c27008b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
