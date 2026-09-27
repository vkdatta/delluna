export const name="schedule_send";
export const id="dl_ab534ba5b6d9a64025c2";
export const url=new URL("../icons/schedule_send.svg?v=42db1c122364b615b5db4421811d160a844e499aa662f06069acaac51a7d7aa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
