export const name="work_history";
export const id="dl_e02f50d1c78fa762c997";
export const url=new URL("../icons/work_history.svg?v=6be46e62df153b10727b26fa1122e34f9046d28b1da3b71db7b306ccc84072e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
