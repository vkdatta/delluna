export const name="truck-bold";
export const id="dl_329fc32e59e212a08852";
export const url=new URL("../icons/truck-bold.svg?v=14c5c9048dca755f14a15bff4fec8906bac3a229e54f1e297eacf2478f20fd08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
