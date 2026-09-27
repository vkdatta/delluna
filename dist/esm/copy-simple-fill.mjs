export const name="copy-simple-fill";
export const id="dl_f86c2ce6931f402fba9b";
export const url=new URL("../icons/copy-simple-fill.svg?v=e522359a0e94847bea8843799170efca46aa4a4e0da982b74b5683d30e42948c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
