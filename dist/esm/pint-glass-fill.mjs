export const name="pint-glass-fill";
export const id="dl_c559ad292b1c4cc49b4c";
export const url=new URL("../icons/pint-glass-fill.svg?v=f7b0f080d092c979df4e58e8eb12400467722e73eafcca483a09231fe1cc4d45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
