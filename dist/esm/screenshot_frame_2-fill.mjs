export const name="screenshot_frame_2-fill";
export const id="dl_265faa014a92543202be";
export const url=new URL("../icons/screenshot_frame_2-fill.svg?v=0c5c0f52de8ef9326eba5023ece3d46dd5be081fe5a23932f7ed77a43c4e78e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
