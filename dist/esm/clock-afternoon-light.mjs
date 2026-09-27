export const name="clock-afternoon-light";
export const id="dl_29d23494d4f242b5a347";
export const url=new URL("../icons/clock-afternoon-light.svg?v=009e8d5558a27b626adfb4ba9b3e5232901c1d854e52fd76213a51a3525d5be3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
