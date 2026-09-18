export const name="split_scene_right";
export const id="dl_695d1cd1082f4f948c8a";
export const url=new URL("../icons/S/split_scene_right.svg?v=de7e535808dde92006480ee4c1b69070413a4ff9a42fb4b967d3fb9ef0a13095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
