export const name="line_start_diamond-fill";
export const id="dl_f99624bf68eaac98527a";
export const url=new URL("../icons/line_start_diamond-fill.svg?v=bc7bc13cf7a0c49180f44a9414f4897a8c9d34aa989a420070019f4f395fcada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
