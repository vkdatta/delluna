export const name="line_end_square";
export const id="dl_80666f203a2aba8c5d6e";
export const url=new URL("../icons/line_end_square.svg?v=613b574d9e02cea6841cb0f42fb5aa0a3b022a94a00ae976c7315ec30844a3ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
