export const name="format_letter_spacing_standard";
export const id="dl_8c99ca2ac9a0c7032f18";
export const url=new URL("../icons/format_letter_spacing_standard.svg?v=850c873dce28b905167334e53b8e95b1e7caf75991cf8c4049c35e8837b9e388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
