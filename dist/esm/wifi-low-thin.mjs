export const name="wifi-low-thin";
export const id="dl_bab5ad451e3008b5ec7d";
export const url=new URL("../icons/wifi-low-thin.svg?v=c5c9386f18fb035ce0a636b12d37699a96b013f1fe39e854492347d47d9cfa45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
