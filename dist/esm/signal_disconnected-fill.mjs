export const name="signal_disconnected-fill";
export const id="dl_c6041d650e1d4549bfe1";
export const url=new URL("../icons/signal_disconnected-fill.svg?v=abb0c3e4decb4263b241730ec81fe088d297827ff539c0b5e1c0f453d7a65ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
