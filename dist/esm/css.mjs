export const name="css";
export const id="dl_37b0dcc0f546aec10e1e";
export const url=new URL("../icons/css.svg?v=698c485f247bc4ed07774a28a2d64c2f262006b8a3eea8cb54f0f2a354773d5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
