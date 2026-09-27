export const name="visor-bold";
export const id="dl_dbcaf7b52301760a834b";
export const url=new URL("../icons/visor-bold.svg?v=2bc92ba4f3763dd2f11ddb185ef0181cf8edd4b61d49e7e78c28250faeeac359",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
