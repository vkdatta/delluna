export const name="seat_cool_left-fill";
export const id="dl_676955b04b28f21acca5";
export const url=new URL("../icons/seat_cool_left-fill.svg?v=8760305def63e76a2b2dcba7cca82c6af0a6f3cca1352c8c0e825b3d4b4a333d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
