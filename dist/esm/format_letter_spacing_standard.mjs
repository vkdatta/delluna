export const name="format_letter_spacing_standard";
export const id="dl_fc8eb2a4be62d834e32c";
export const url=new URL("../icons/format_letter_spacing_standard.svg?v=cb0777f17efe5447af1600e02732a2338b1c987fcc3c56f1463243b8ce86267a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
