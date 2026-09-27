export const name="format_letter_spacing_standard";
export const id="dl_d0ecaf9f74458a2a94aa";
export const url=new URL("../icons/format_letter_spacing_standard.svg?v=248e93c7d6764da0ac90c9f32b25738d2a9fe3b8ea389583eb3a0bf0eb4859b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
