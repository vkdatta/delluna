export const name="thunderstorm-fill";
export const id="dl_57869e4e71d2bf1b71e6";
export const url=new URL("../icons/thunderstorm-fill.svg?v=a0e6ebf573c30476e785c36660a6e1d505bf9dc12fd8281079190bc742ccd993",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
