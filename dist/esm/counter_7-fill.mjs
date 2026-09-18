export const name="counter_7-fill";
export const id="dl_d97364625af4403a93cf";
export const url=new URL("../icons/counter_7-fill.svg?v=9846a33f4bffcc1d5bf951c147150f384cd66607d06a9b7766717b6b2900ff1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
