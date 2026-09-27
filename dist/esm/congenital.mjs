export const name="congenital";
export const id="dl_78be17085d114e0b703a";
export const url=new URL("../icons/congenital.svg?v=8107a3474bc1a6b4682dc73a708c6efbd729d7af78667e06eea41877ff03ce0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
