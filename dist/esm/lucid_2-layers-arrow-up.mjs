export const name="lucid_2-layers-arrow-up";
export const id="dl_eabb09c6e42240c2a4bb";
export const url=new URL("../icons/lucid_2-layers-arrow-up.svg?v=cc640dbd383b9dee497169ad0d6dbb71ab47636c2a96c879983cd77000caf5ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
