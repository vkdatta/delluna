export const name="view_comfy_alt-fill";
export const id="dl_e36212121159472d924e";
export const url=new URL("../icons/view_comfy_alt-fill.svg?v=9bbcded84795df8d6f65aef4fffb0eb8188a3c7d93e4f6deb6a54cbd5038c081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
