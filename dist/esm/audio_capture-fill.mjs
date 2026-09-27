export const name="audio_capture-fill";
export const id="dl_a77461b219da8bb33e25";
export const url=new URL("../icons/audio_capture-fill.svg?v=f3e8fca2817167cef35858987e0d24ec49527325b4b2f7bd702a560265146f04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
