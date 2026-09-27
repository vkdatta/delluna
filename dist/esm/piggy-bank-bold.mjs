export const name="piggy-bank-bold";
export const id="dl_00ce51898a91468eb824";
export const url=new URL("../icons/piggy-bank-bold.svg?v=d499a3b1fc1e52cad2c4ac779112ac235f9c83e5c643edb4784f160772e386a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
