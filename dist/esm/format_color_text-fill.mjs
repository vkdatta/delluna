export const name="format_color_text-fill";
export const id="dl_c59e926eaaa21df4ff20";
export const url=new URL("../icons/format_color_text-fill.svg?v=3564ab42646cdee8f2bbbff6ba8da2f18a0979ffdf669522a0570a9a6e3a2b66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
