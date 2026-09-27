export const name="save-fill";
export const id="dl_8f6adb0c93ea19aae377";
export const url=new URL("../icons/save-fill.svg?v=57bf64d428a2b0751e75287ee404e2d3cd5bcd0c299e6747cd8a87362dbdbf34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
