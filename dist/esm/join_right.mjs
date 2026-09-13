export const name="join_right";
export const id="dl_719664abda1b4716aab2";
export const url=new URL("../icons/J/join_right.svg?v=46b8e251bfa5b97204daebbfa832911ad31d340bd3c2b8b7e4e03d9c2dad467a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
