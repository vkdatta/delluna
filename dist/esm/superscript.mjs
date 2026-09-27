export const name="superscript";
export const id="dl_601c7e5dd4ce4b6f90bb";
export const url=new URL("../icons/superscript.svg?v=0f1f9a670cfa0d141ae03baa3b72e3d5906274d402990823f2ddbff9a15fa809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
