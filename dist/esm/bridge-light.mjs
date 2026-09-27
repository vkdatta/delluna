export const name="bridge-light";
export const id="dl_bc5fb4423ee441b99d99";
export const url=new URL("../icons/bridge-light.svg?v=b6e478f8fb061e8d5354b7ac468f787a776c0809ab0095a86b343b904b4129a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
