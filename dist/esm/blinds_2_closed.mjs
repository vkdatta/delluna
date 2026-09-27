export const name="blinds_2_closed";
export const id="dl_2c6e1c3fa3edc29d7896";
export const url=new URL("../icons/blinds_2_closed.svg?v=dfdbfb5da2f35fd505ba7f31ad6b76bf273e3fea7bce6e99869e8ff1d72bcfc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
