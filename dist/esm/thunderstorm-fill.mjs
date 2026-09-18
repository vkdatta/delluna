export const name="thunderstorm-fill";
export const id="dl_4b16cb354d8d406992da";
export const url=new URL("../icons/thunderstorm-fill.svg?v=a0e6ebf573c30476e785c36660a6e1d505bf9dc12fd8281079190bc742ccd993",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
