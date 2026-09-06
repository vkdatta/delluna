export const name="tray";
export const id="dl_9f4c93c710d2433194dc";
export const url=new URL("../icons/tray.svg?v=3f53c6a8a8f5fd528c095b0ac0ab66d65d352d710d9ba48d9e855e6995591560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
