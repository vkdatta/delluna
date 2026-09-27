export const name="invert_colors-fill";
export const id="dl_82644d4e6a620d4bbf69";
export const url=new URL("../icons/invert_colors-fill.svg?v=04ba9c9bf83cb427ec1653462630f6751024dd9a5d28874cb161fc902f26a16c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
