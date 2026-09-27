export const name="file-arrow-down";
export const id="dl_9a4765c2d4454bea866b";
export const url=new URL("../icons/file-arrow-down.svg?v=311da7a1ac6ac52aed86c795c393f1b0f4609eebab556da26c747e8501e7a439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
