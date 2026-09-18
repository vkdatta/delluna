export const name="directions";
export const id="dl_9534e018a50c492eb81e";
export const url=new URL("../icons/directions.svg?v=ec16e4f78a3162832a5a896ecdef7add0410e66cbec62ee843e1ab29902cd2ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
