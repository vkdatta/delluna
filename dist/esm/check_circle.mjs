export const name="check_circle";
export const id="dl_4d3d6f3719a94266b024";
export const url=new URL("../icons/check_circle.svg?v=2e67802cdc562f318a7359783a235ea0b8e459dcbc12f514f26c45baef9b6bdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
