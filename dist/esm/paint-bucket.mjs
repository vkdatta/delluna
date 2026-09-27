export const name="paint-bucket";
export const id="dl_f6c5c385d3464fcd8b39";
export const url=new URL("../icons/paint-bucket.svg?v=f3943e9032a3f79e9bdee11f11c0895b73f895a1949d943d001f7d95559669f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
