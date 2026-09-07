export const name="television-simple";
export const id="dl_e34b5a3adc1046a6bd89";
export const url=new URL("../icons/T/television-simple.svg?v=c443681533640fe60a3c37b0ef7786886845c47b4f3dc2086e9a02b94d0a168a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
