export const name="dock_to_left";
export const id="dl_b057c7a3ae5d88ffadb0";
export const url=new URL("../icons/dock_to_left.svg?v=e6e7253451b455d45d689b8146d67bc8e86d75574fcce282a87f52bd5be61119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
