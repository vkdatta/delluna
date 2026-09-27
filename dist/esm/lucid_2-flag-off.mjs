export const name="lucid_2-flag-off";
export const id="dl_d67304b8b2054e4fa944";
export const url=new URL("../icons/lucid_2-flag-off.svg?v=c60f4c1bda375e09adc12fc7ff50c546c75660d9054bde18f00ca058c80f59f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
