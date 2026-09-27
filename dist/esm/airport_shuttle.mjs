export const name="airport_shuttle";
export const id="dl_e4b408a05923fc9adc7c";
export const url=new URL("../icons/airport_shuttle.svg?v=7056ba138f2e8ad5363ecb384fdbf0c40d7dccbf72182652a3621c3d2b0ef0ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
