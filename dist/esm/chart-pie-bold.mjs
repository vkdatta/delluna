export const name="chart-pie-bold";
export const id="dl_035e6d6f544e47bfad81";
export const url=new URL("../icons/chart-pie-bold.svg?v=44b61b6862b75087449f6da1c126e2c7b64a1cc7f1a8788ea79187bb4cdee111",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
