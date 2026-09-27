export const name="video-fill";
export const id="dl_9226b2c33b1e10fb7f06";
export const url=new URL("../icons/video-fill.svg?v=2e4a8be8d983770f53f78fa8f2cfa23f79c3178c754d90bb9689add30e252660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
