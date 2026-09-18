export const name="bathroom";
export const id="dl_febbb8067c6f40e6bc0a";
export const url=new URL("../icons/bathroom.svg?v=b31d1081b347c229b48f023fc22c201d0f7425d2b749231e86e475ba3200110f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
