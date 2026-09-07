export const name="footprints-bold";
export const id="dl_22afb1cf6a2d4a07b0b9";
export const url=new URL("../icons/footprints-bold.svg?v=b8bcca24dacd59fa96f6bd90571b7a14b7f6271c697b2249f77133122c384699",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
