export const name="full_coverage";
export const id="dl_8329feada91ca64f809a";
export const url=new URL("../icons/full_coverage.svg?v=e1fbf83815bf0fa82d41ecc641d452eed8128bef42f3dc420159e262a6e588c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
