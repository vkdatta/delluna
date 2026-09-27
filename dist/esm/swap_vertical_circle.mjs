export const name="swap_vertical_circle";
export const id="dl_321a49c96bfeb26c5d00";
export const url=new URL("../icons/swap_vertical_circle.svg?v=e8e79bbfdc4026d9b5afdec86d947d99a2aae4d5414bbed2edbfcdc1b89eb912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
