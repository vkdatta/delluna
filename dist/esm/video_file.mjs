export const name="video_file";
export const id="dl_c0699fd7105b1df4aa2f";
export const url=new URL("../icons/video_file.svg?v=ee33347ad176ba07283d8ff56ec929b593b23f2d77da114917b63a95ef88dcac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
