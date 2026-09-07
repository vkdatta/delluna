export const name="yarn-fill";
export const id="dl_d5668384e886488589cd";
export const url=new URL("../icons/Y/yarn-fill.svg?v=c6784f7fc2da886e2c6c734a879ec8accb01d3597fa8243a23042e5342edcc51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
