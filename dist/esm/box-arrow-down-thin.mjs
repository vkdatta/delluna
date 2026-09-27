export const name="box-arrow-down-thin";
export const id="dl_76b5f7a0655142d7ada3";
export const url=new URL("../icons/box-arrow-down-thin.svg?v=e33c7571a0d2687d1c601b6ca472b1332401dea8820bc3e1a8700cbb20608803",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
