export const name="cell-signal-medium";
export const id="dl_9ca80611b3024888a8ba";
export const url=new URL("../icons/cell-signal-medium.svg?v=f3387569cadde9f17e9c011d534ccfcaf6bbe9f37220b18dbd2482b5f882f73c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
