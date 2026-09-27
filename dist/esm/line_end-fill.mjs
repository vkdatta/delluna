export const name="line_end-fill";
export const id="dl_4e452a1ed5e4841f46d6";
export const url=new URL("../icons/line_end-fill.svg?v=ae26661bcb7700787b0bde61b0983d2d558db28c8555052e446a6315fef00038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
