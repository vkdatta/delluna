export const name="pipe-bold";
export const id="dl_f7aa31113e58472d8ca4";
export const url=new URL("../icons/pipe-bold.svg?v=28ad44a036a3fe620934df5f59bcf1d2cf2511877b18b453f9ef35b47de67c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
