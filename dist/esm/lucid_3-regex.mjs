export const name="lucid_3-regex";
export const id="dl_e7732b6e7e184246a9d3";
export const url=new URL("../icons/lucid_3-regex.svg?v=412600be6968d3bdb91e71112e0f38b7088fda6bc917cf3f7fcb7cd14ec1c793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
