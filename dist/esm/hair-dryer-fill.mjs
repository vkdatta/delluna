export const name="hair-dryer-fill";
export const id="dl_944ba1f2f4164af8bca5";
export const url=new URL("../icons/hair-dryer-fill.svg?v=a7e85bf6ad6cdd319b719050f28dcd2f620beb5725a3be18e52a9801d5834dfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
