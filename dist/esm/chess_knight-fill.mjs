export const name="chess_knight-fill";
export const id="dl_a447d9cc10a91646ce76";
export const url=new URL("../icons/chess_knight-fill.svg?v=4900be02639b65d1d00d1312fb6deaf9ac3baa7ab252680dac45548905aa164b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
