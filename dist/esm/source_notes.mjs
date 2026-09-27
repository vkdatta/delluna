export const name="source_notes";
export const id="dl_cb8c76ad1e1e3c527801";
export const url=new URL("../icons/source_notes.svg?v=90bce7cbbdec4a8f910ef090a502c00e9549e77bb5d4591f18d33b0fffc5bce5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
