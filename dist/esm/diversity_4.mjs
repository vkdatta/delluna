export const name="diversity_4";
export const id="dl_d0764c4b5efa2abd91eb";
export const url=new URL("../icons/diversity_4.svg?v=ff5c45e852ba6c9b0c463e33f32b78f2d0e3d79f3781708ea25886e311f02637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
