export const name="no_transfer-fill";
export const id="dl_36a612ab7e5889fdb131";
export const url=new URL("../icons/no_transfer-fill.svg?v=c30dba7dc62502c099e951946afffa63e509b0059bf5fea16ea5c54829206ac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
