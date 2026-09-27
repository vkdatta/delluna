export const name="road-horizon-light";
export const id="dl_65a4cc92bf9d48a5a79b";
export const url=new URL("../icons/road-horizon-light.svg?v=2e2a1ffd022b938c31cb0449b73109ca29ad472a01081ca9721da6621504e5b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
