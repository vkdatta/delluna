export const name="grid_layout_side";
export const id="dl_236fddd0c23a219749d7";
export const url=new URL("../icons/grid_layout_side.svg?v=a50a18047e58b881a7e6eb4f789da7047dc7b78619d71f67e9633138b9b63eed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
