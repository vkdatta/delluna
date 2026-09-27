export const name="text_snippet-fill";
export const id="dl_570e3bb88b8d2111626d";
export const url=new URL("../icons/text_snippet-fill.svg?v=c423ed0c57805f8d588ec8d11b3321686811cfdf832a81d207229e3a0704aa0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
