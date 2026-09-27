export const name="git-pull-request-bold";
export const id="dl_c6b04b7a0087499c8ddf";
export const url=new URL("../icons/git-pull-request-bold.svg?v=1947bf6ce322c1c2957e62b6e25e68febb363572525b120d3264ffa09f861ce0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
