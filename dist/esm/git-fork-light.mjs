export const name="git-fork-light";
export const id="dl_6975c780cd6646fb91b5";
export const url=new URL("../icons/git-fork-light.svg?v=f393c1f3a7862b8dc54506a4677b8da124938f99169feeae2197e5b913dbe878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
