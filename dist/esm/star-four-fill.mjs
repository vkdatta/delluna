export const name="star-four-fill";
export const id="dl_4e5cd115feb54a59a2a8";
export const url=new URL("../icons/S/star-four-fill.svg?v=2e323dacc3116d0fdd2e5748297a868469cdaedcd973b76b87fc127bb8082f91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
