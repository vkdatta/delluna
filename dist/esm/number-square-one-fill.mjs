export const name="number-square-one-fill";
export const id="dl_f1f50240d5004ce396ee";
export const url=new URL("../icons/number-square-one-fill.svg?v=7cf37e9c094e4973e5b0ba753247c0370f017912938a290e28673f001c6eafbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
