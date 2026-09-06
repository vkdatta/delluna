export const name="baseball-fill";
export const id="dl_7f71bb70666e46129d5e";
export const url=new URL("../icons/baseball-fill.svg?v=4d805a91f1b4f3c04bf691e653b80755f5213a876eff4699657ed91fc64fb569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
