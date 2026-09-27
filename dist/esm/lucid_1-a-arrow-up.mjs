export const name="lucid_1-a-arrow-up";
export const id="dl_6fb48c67f61745958978";
export const url=new URL("../icons/lucid_1-a-arrow-up.svg?v=7ddbb6f782e83b9adcfe99fe1ba8b09b239ecdcf0b83e539f42c7a1003917aca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
