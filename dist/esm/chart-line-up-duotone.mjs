export const name="chart-line-up-duotone";
export const id="dl_4e9e47a6edc14a119959";
export const url=new URL("../icons/chart-line-up-duotone.svg?v=86b5bfdff2eb2bc6fc8545a71950aef4185356ee9bde18191d543fee97ff4e30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
