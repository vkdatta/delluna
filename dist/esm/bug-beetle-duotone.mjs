export const name="bug-beetle-duotone";
export const id="dl_762ab8fdb67f483baee0";
export const url=new URL("../icons/bug-beetle-duotone.svg?v=6a27277b175779f26a4ffb3dae82920b09bddaceb47d99f1b419aec68d6a42ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
