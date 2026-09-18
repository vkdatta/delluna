export const name="heart_minus";
export const id="dl_043fbaca63104d12a186";
export const url=new URL("../icons/H/heart_minus.svg?v=fbe99206fcdc150e09d574b82be27f3174c28721299973712747a89c4df1012a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
