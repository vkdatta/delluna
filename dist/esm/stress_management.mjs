export const name="stress_management";
export const id="dl_5ac38d97ba97129abcbf";
export const url=new URL("../icons/stress_management.svg?v=f3d2ec3f75679c1ca49214354b4148c526b20c4dcc7b894f1adefe3854f570f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
