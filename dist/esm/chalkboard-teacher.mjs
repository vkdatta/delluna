export const name="chalkboard-teacher";
export const id="dl_318011005a4945c99ff3";
export const url=new URL("../icons/chalkboard-teacher.svg?v=c4d7bb193e8d67269b500330cf4aa6f21f2ddfd41334b0ac3b6b5186eaa10cb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
