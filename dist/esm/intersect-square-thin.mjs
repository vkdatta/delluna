export const name="intersect-square-thin";
export const id="dl_a38f789d98274b949181";
export const url=new URL("../icons/intersect-square-thin.svg?v=8b7789229e16dcc9a98f9fa7ea2293d6443fb3919899db1090c8d7781a6af3d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
