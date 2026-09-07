export const name="lucid_1-combine";
export const id="dl_3310eef0cd134657bfee";
export const url=new URL("../icons/lucid_1-combine.svg?v=7120f96e1f4715a3df6cd7709e67d71e5d022dab1fe326b929c568129ae3bf18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
