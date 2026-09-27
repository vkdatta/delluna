export const name="number-circle-two";
export const id="dl_2c6c6fcdb1bd4bc7b0c3";
export const url=new URL("../icons/number-circle-two.svg?v=df92099cfd93c8ec94fcbc869a4c28c196cced9458df9323860970e502c10adc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
