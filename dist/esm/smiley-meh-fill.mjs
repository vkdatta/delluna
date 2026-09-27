export const name="smiley-meh-fill";
export const id="dl_74c888ddfe4f45a8532a";
export const url=new URL("../icons/smiley-meh-fill.svg?v=5e1a26475887a6be90647ccce9ee5198c7cf49139dc5f26acd5b98f14554269a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
