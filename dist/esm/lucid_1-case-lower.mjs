export const name="lucid_1-case-lower";
export const id="dl_7532debb23964b36bc38";
export const url=new URL("../icons/lucid_1-case-lower.svg?v=6de3b9ad322470f733dc4b6dd64f2d9501096c29c04a1beaabf8dbc23047f615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
