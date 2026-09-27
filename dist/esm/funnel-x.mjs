export const name="funnel-x";
export const id="dl_c4b09531350b4d3b87ef";
export const url=new URL("../icons/funnel-x.svg?v=c2d9fad609d0588656e132ae3f95e9b9b03c896df1d83468b402993478bbde3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
