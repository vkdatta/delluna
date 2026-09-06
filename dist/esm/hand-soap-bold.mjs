export const name="hand-soap-bold";
export const id="dl_9441e6330fda4a7c875b";
export const url=new URL("../icons/hand-soap-bold.svg?v=ee0d352ac9d2a6c79a83b4c49bdc15b04c281438a6fcef80e172bfd9c6bd60ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
