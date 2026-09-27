export const name="nest_mini";
export const id="dl_75b971421f067dda6389";
export const url=new URL("../icons/nest_mini.svg?v=7eeb523ca91637049597f3270b69c6b194cc09ab4bdbb96fcc3dad7a924c479a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
