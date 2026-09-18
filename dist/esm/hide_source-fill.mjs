export const name="hide_source-fill";
export const id="dl_e45c02c3ff3741c7aa3a";
export const url=new URL("../icons/hide_source-fill.svg?v=49e460ba611bba714d1df460f881cef4bb8d8844438f39847f460d2423638543",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
