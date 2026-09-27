export const name="toast";
export const id="dl_8af9d1559321628c2fc2";
export const url=new URL("../icons/toast.svg?v=5e751a5e5c1f4f542f58cd20bd0bbea4a462184f6194d2533f91a08c9cdd2def",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
