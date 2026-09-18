export const name="format_image_break_left-fill";
export const id="dl_1b3d85571a754a5a855a";
export const url=new URL("../icons/format_image_break_left-fill.svg?v=3c5595cbe8f19002c989ac94f61197e72671550fee9a02896476e168c49c310b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
