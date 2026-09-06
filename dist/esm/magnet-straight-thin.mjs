export const name="magnet-straight-thin";
export const id="dl_539713373b0a4acc8a18";
export const url=new URL("../icons/magnet-straight-thin.svg?v=67cf6c5a86110c9d3c1ffcc0bdb78ec9b52bcd3ec69fe8eb946686d2862b5f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
