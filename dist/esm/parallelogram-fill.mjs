export const name="parallelogram-fill";
export const id="dl_d6ef682459cf406fae46";
export const url=new URL("../icons/parallelogram-fill.svg?v=73901a8d15e6aff77e20c9bc2a599fea08f0a5059a2ad0a3cb02f7855f7cc746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
