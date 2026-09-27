export const name="candle";
export const id="dl_f6e372c1242debd49d51";
export const url=new URL("../icons/candle.svg?v=df2fdfa7b86818359a9c273fe26004f700615000e3f9b194b5c6561a91c69129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
