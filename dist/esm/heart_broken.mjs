export const name="heart_broken";
export const id="dl_b2451f2af0674fe6eb4f";
export const url=new URL("../icons/heart_broken.svg?v=4277cbf63998be8345fecc60e484adce98d458b75eadf0021effea9cc9ef44d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
