export const name="style";
export const id="dl_eef0cf955b264371a41b";
export const url=new URL("../icons/style.svg?v=49660c82b6e791afcac126ed985e062dcc67960807e6dab248ba53c498b17a03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
