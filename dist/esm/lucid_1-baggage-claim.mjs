export const name="lucid_1-baggage-claim";
export const id="dl_25f4ae3598cb4ee2948d";
export const url=new URL("../icons/lucid_1-baggage-claim.svg?v=ea2faf99dd14605ea2a0153aa4272470524d2f318ec06d7ac4cc758cdd9e2c6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
