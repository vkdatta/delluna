export const name="chart-line-up-duotone";
export const id="dl_4e9e47a6edc14a119959";
export const url=new URL("../icons/chart-line-up-duotone.svg?v=763f68a9df1cb0dc8a687850273c523078a3b7af3618e04c51ea1106e2dca8b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
