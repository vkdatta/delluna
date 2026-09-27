export const name="traffic";
export const id="dl_d5fcad030de902d96558";
export const url=new URL("../icons/traffic.svg?v=328b02e7ab1a0a725307110c7854db10da16bb96b739f1eed0871b85270c1e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
