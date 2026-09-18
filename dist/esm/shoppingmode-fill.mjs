export const name="shoppingmode-fill";
export const id="dl_72cfad413f874a1fb4dd";
export const url=new URL("../icons/S/shoppingmode-fill.svg?v=1f8c460ad86fe07402ea7d308b5e0f880fc2a5d67ea880018d18800d25cd7b79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
