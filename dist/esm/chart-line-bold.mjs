export const name="chart-line-bold";
export const id="dl_b98ddf864e504461ba98";
export const url=new URL("../icons/chart-line-bold.svg?v=9bc488ab957fda8a9a91d9d6601cc6e706e2c67a897fd33a0d385e2eac2cc719",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
