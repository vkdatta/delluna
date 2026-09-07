export const name="plus-light";
export const id="dl_af84aa528600460e893e";
export const url=new URL("../icons/plus-light.svg?v=d924e999d110e1f84c3197dba33206d46fb94cb28a2b53f6ca35217466e3c92e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
