export const name="airplane-takeoff";
export const id="dl_8045f0082de3462bb066";
export const url=new URL("../icons/airplane-takeoff.svg?v=512fab244c633e7c9a22ace8d5962cc6d21104d40694d5a78c6df9022214101b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
