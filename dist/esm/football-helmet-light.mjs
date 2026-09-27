export const name="football-helmet-light";
export const id="dl_a0815ab521d8435d9e22";
export const url=new URL("../icons/football-helmet-light.svg?v=8cb0a9662d17ac43a6fa088c64d325ca97c26ae6daddab6d23bb27825e5ffde9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
