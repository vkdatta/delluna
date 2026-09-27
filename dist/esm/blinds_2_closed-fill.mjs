export const name="blinds_2_closed-fill";
export const id="dl_6588173489efcf2535d5";
export const url=new URL("../icons/blinds_2_closed-fill.svg?v=e3d29bc369cf917ef475fc6bcf2d8aab16ff8ac8f74320520193bd1db258f8d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
