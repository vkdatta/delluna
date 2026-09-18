export const name="sync";
export const id="dl_cafdfde46f104637a54c";
export const url=new URL("../icons/sync.svg?v=8c3a5d4b5d37db465a77e1becbaee6539d31f7de28d2b99718bd34a79cc06fdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
