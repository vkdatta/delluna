export const name="view_comfy";
export const id="dl_8b4a49c78e2f910747da";
export const url=new URL("../icons/view_comfy.svg?v=822df73fe07b115a21e4c5e5683d7427d545c69cacac21c414f953eb51b346f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
