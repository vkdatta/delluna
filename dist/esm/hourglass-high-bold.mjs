export const name="hourglass-high-bold";
export const id="dl_177da75287694c68b57b";
export const url=new URL("../icons/hourglass-high-bold.svg?v=535cfef959b5611b9ae41117ac9503199dd635bd199d722f5041147371062dec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
