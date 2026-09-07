export const name="lucid_1-chess-bishop";
export const id="dl_6804b40db5c94f5bb8fd";
export const url=new URL("../icons/lucid_1-chess-bishop.svg?v=081a7c48a8bf2d4daa2507d56361b61161229a7fe5b37f5812816f8eb3962c92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
