export const name="forms_add_on";
export const id="dl_05439c25789c0c6fff56";
export const url=new URL("../icons/forms_add_on.svg?v=0c3f4bd582ee1761c7bf15ff7cbe40c9b88d38d0f4d862ab2d344536655acc7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
