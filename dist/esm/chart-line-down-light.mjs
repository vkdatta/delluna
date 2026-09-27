export const name="chart-line-down-light";
export const id="dl_bd80847d9d1e44e5a39c";
export const url=new URL("../icons/chart-line-down-light.svg?v=ccdc178d61441004ea264f10e5d905c40d6dfd6c0fd9d83375c0dd70715387b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
