export const name="pending";
export const id="dl_cc76e4893df2941bca8f";
export const url=new URL("../icons/pending.svg?v=ae27dd106b5207f87490a8a0736e8c802fa6ae9dc9d4acdf121dffee2695e8c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
