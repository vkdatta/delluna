export const name="clipboard";
export const id="dl_6e6688875bbf423e9c23";
export const url=new URL("../icons/clipboard.svg?v=e117d77a4973157ebb6c62b12d833e97ffcec0103103ee82a7663b0fa3905f01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
