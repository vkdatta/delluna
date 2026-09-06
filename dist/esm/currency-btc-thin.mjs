export const name="currency-btc-thin";
export const id="dl_a419b7aa809a49adbd4f";
export const url=new URL("../icons/currency-btc-thin.svg?v=68f94389182502cc53f3d9362dbd28f37fc2fd18e024b796b9e89a7aa309769a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
