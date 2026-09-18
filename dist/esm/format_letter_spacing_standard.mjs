export const name="format_letter_spacing_standard";
export const id="dl_0180d4ba6ace4821b9f0";
export const url=new URL("../icons/format_letter_spacing_standard.svg?v=89ebdad51746cfda078e3c213677848834ec4b3af1f566d3759f3607c0ba49c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
