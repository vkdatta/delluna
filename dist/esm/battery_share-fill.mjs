export const name="battery_share-fill";
export const id="dl_3dd12e0a36700d533a69";
export const url=new URL("../icons/battery_share-fill.svg?v=7f17dca8d09955442e171d78c0bbff3e2e8ea7c1d2e4fd1d9e90b8355b80ae3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
