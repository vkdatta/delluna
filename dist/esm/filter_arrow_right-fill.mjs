export const name="filter_arrow_right-fill";
export const id="dl_d91347cd643ea78f1452";
export const url=new URL("../icons/filter_arrow_right-fill.svg?v=51f38a5af90a004cc910a83b284327759d322b2080ad44a9b365849a3e0a4da3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
