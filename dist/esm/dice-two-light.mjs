export const name="dice-two-light";
export const id="dl_3a4ad1cad61048d29ca4";
export const url=new URL("../icons/dice-two-light.svg?v=2fda65d8d0bb24c173dc5c4b3ae1df2c1f749303abe604b81196fd5c1f45b2e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
