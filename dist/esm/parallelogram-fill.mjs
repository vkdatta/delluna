export const name="parallelogram-fill";
export const id="dl_d6ef682459cf406fae46";
export const url=new URL("../icons/parallelogram-fill.svg?v=08081e752ab5433b985e4c522ee3bc971b07e155d43140e19255f39e1609a68c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
