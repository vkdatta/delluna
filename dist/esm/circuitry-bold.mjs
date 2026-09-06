export const name="circuitry-bold";
export const id="dl_de577c3b3009452383b3";
export const url=new URL("../icons/circuitry-bold.svg?v=a7ea8ef8d9d41548ff6d6cb9beb59c147e4081d1323a73d99888d47f47bd5452",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
