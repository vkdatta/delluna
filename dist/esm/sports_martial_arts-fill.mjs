export const name="sports_martial_arts-fill";
export const id="dl_43b4ba03edf850c7f367";
export const url=new URL("../icons/sports_martial_arts-fill.svg?v=4bb1b56080e732082e1d0ccefae67d0f1dff5d321b020f03d107ca5e3bc54752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
