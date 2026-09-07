export const name="hard-hat-fill";
export const id="dl_3f164166f73542caa996";
export const url=new URL("../icons/hard-hat-fill.svg?v=d04ded4b07efa7009c4f661a49aa35087783e99a9d4b19948c97e55d8eb695e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
