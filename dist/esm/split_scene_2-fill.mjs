export const name="split_scene_2-fill";
export const id="dl_5e7ed2f7fef42e5ddaa7";
export const url=new URL("../icons/split_scene_2-fill.svg?v=831571db8f77bbb76263d2fdbc589e5b083f4134f6356bb2181bb893322ab3f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
