export const name="format_image_front-fill";
export const id="dl_5836b2d3004e68a20f85";
export const url=new URL("../icons/format_image_front-fill.svg?v=757874e83b29f8a1bedfa48292dbc1754fa24ca4d14f5eeb977bf8c3d9c82099",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
