export const name="social_distance";
export const id="dl_15631868609fa2c4dbce";
export const url=new URL("../icons/social_distance.svg?v=757c4806e23be0c9af165c2a29c6e11a8ea9b9ddb07a077650c1142294f8de0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
