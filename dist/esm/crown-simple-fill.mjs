export const name="crown-simple-fill";
export const id="dl_047d3df0bd4241dab4a0";
export const url=new URL("../icons/crown-simple-fill.svg?v=9779e46bf3373829ac4f4cf8ca04582d574b3dd064044950aac06a3a2f97b261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
