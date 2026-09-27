export const name="chess_bishop_2";
export const id="dl_f116cf6a8436cc9e3673";
export const url=new URL("../icons/chess_bishop_2.svg?v=ab218ff83d05c8f0c6bd8445bb2aeac5944f4cb7d8d1662b9d8c56752e4b2ecf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
