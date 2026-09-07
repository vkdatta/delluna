export const name="wheat";
export const id="dl_7907ae95a8f24867a6d6";
export const url=new URL("../icons/wheat.svg?v=1e0a341e033e2d00bec57ec5f1bfa37d8b6ffb5c91085be72c48e3df08d41446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
