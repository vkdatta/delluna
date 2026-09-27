export const name="lucid_3-person-standing";
export const id="dl_aeede8789c2b47038369";
export const url=new URL("../icons/lucid_3-person-standing.svg?v=56c67ecbd3d20be12e6392313e5a45bfe5d1a73c9eca8898b467bf8ca10044b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
