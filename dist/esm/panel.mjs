export const name="panel";
export const id="dl_c9a8402e442a46d78be0";
export const url=new URL("../icons/panel.svg?v=33c46989fb2120c6a38fd4c853cc1195d02cea9e9e0b4b29b1886f3322e843ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
