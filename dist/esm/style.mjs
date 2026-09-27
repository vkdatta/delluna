export const name="style";
export const id="dl_5bda730b2a4d41c9dcc7";
export const url=new URL("../icons/style.svg?v=71c8b33d3907d9a12ee6e699f3e696fee15e0f574aa761fe80ef98aee22a6ba0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
