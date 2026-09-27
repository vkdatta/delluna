export const name="host";
export const id="dl_d26a3a67b760e0fb9703";
export const url=new URL("../icons/host.svg?v=27e8b293e8d504fb7241f49da0377ab9cfafe1599610e27ed3bbdc8ab8a89d34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
