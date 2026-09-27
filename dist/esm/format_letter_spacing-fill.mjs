export const name="format_letter_spacing-fill";
export const id="dl_e50ba36b2160b082eb69";
export const url=new URL("../icons/format_letter_spacing-fill.svg?v=4e379040a0918b863bb6743bf9da5eace674ac97326dacfe6b9c3f15d64ba3c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
