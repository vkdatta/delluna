export const name="wrench";
export const id="dl_ecbcf2a8abc35b89cf40";
export const url=new URL("../icons/wrench.svg?v=d8653f106c80849a769555c0837e2ec91638cb92d8dbcfd3857e8624e73ce773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
