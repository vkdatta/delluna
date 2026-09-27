export const name="divide-light";
export const id="dl_1d97d5de21a540afbd89";
export const url=new URL("../icons/divide-light.svg?v=af3e206b048843ba67ccd6f7752e65820b6a8e9dd354e4981dec18b36e36f2ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
