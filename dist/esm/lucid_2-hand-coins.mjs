export const name="lucid_2-hand-coins";
export const id="dl_72eb8abceaa348eab5b8";
export const url=new URL("../icons/lucid_2-hand-coins.svg?v=b9e114a018ee15a138836dad4e9463fe6f059664719585629598c1642b2ff889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
