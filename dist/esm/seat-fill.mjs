export const name="seat-fill";
export const id="dl_5851f1dd7ee9bc325e2b";
export const url=new URL("../icons/seat-fill.svg?v=f6c7279ae5cdf2ecfec0c026ceb3067606bea61d4c6188a1405b63cbe9df04d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
