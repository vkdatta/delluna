export const name="lucid_2-hand";
export const id="dl_d8786d434bfb44738eea";
export const url=new URL("../icons/lucid_2-hand.svg?v=2571f6c48a7f9b7bb40782c836bcf9fb57a23d956bea6ef62170b3b7859af260",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
