export const name="nest_tag-fill";
export const id="dl_a128a25519b446fbbb5b";
export const url=new URL("../icons/N/nest_tag-fill.svg?v=88df37f619bb38c9db3ee742e022648bf7e5b372dbd836da09c326d3d30260ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
