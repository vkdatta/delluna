export const name="lucid_3-message-square-lock";
export const id="dl_880050a685504be9ba61";
export const url=new URL("../icons/lucid_3-message-square-lock.svg?v=87e46dc2b1d0b1e5044d1c79af98ad2ad2a2b6af5466a68dbd157ebd1533e74c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
