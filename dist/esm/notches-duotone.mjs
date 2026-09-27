export const name="notches-duotone";
export const id="dl_3ce53210211d4cd9ae13";
export const url=new URL("../icons/notches-duotone.svg?v=a032889b6a58f8c841762ec5cb747e50d98cc0433f2aaeb383bce4387c757ddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
