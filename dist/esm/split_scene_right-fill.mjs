export const name="split_scene_right-fill";
export const id="dl_77eb531b12c44250b695";
export const url=new URL("../icons/split_scene_right-fill.svg?v=4b0bc3cb3943149241244b43dc0aaed2e3cccc393aded9935100354b8344e9d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
