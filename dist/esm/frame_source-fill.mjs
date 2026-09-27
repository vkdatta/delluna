export const name="frame_source-fill";
export const id="dl_296cd6d77c4ced5d15e9";
export const url=new URL("../icons/frame_source-fill.svg?v=c8c1a414ab3e5300c7563464022e6c816dfb887e88985da9c41625e4340f4f15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
