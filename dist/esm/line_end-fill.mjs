export const name="line_end-fill";
export const id="dl_f2683a5b268b43159e88";
export const url=new URL("../icons/line_end-fill.svg?v=d21e253e54c7526c07c0b00e6e299c40470279e2126f72d30ae91d6896fbc0a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
