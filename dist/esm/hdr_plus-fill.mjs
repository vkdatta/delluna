export const name="hdr_plus-fill";
export const id="dl_fda7ac6af4cee67d317a";
export const url=new URL("../icons/hdr_plus-fill.svg?v=3c9652785d20d50f5505c57e10a85f91ce4dd42c02bbd7c2fdfd24890718c514",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
