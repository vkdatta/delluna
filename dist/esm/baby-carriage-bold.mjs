export const name="baby-carriage-bold";
export const id="dl_93c4114e6ce14f7491bd";
export const url=new URL("../icons/baby-carriage-bold.svg?v=8f2aefe46fd21858be0aacf1d37a13ed888672d01b35f23ee663da3c0e72811a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
