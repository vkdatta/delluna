export const name="tote-simple-light";
export const id="dl_a684746bc92e4b04bb34";
export const url=new URL("../icons/T/tote-simple-light.svg?v=3bdc228332230b89d8eebc3bdbaadf8ca282f5b492ea8349ef0e346abfccf536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
