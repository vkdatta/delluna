export const name="figma-logo";
export const id="dl_7ec133c3801d4706a431";
export const url=new URL("../icons/figma-logo.svg?v=66397368206ef42d14e06be0861e9bc9b1a40c5bd818d95f939e6aef8f50bee0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
