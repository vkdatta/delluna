export const name="present_to_all";
export const id="dl_86f920d3370517d60fbb";
export const url=new URL("../icons/present_to_all.svg?v=aeda7a336aba01c1d2a2d36adeb63a74c31faaeb3e8a7de79a63ff035f21043f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
