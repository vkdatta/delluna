export const name="drop-slash-fill";
export const id="dl_34fe4c9bc1b843a2bd37";
export const url=new URL("../icons/drop-slash-fill.svg?v=3a4118b6d23207c6d5d6b6220ddcb4f9fc344394638ddf6b3f2b7384c43b7b52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
