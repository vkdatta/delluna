export const name="lucid_3-milk-off";
export const id="dl_61172184b281481c8326";
export const url=new URL("../icons/lucid_3-milk-off.svg?v=a4d6cd30a97dcbec46c907b426a5d02b7c9e73b937c833f3b5a10b5d098772dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
