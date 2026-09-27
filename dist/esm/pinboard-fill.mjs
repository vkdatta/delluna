export const name="pinboard-fill";
export const id="dl_86cc8c51f1f7fb6ac400";
export const url=new URL("../icons/pinboard-fill.svg?v=ea6afab7fb6b4b6df8d1088d36aff8df6550ade69977cd7f0c17e4b1fdf229be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
