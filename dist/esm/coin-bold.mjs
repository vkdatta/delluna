export const name="coin-bold";
export const id="dl_3bb050bbc1cb41d48a93";
export const url=new URL("../icons/coin-bold.svg?v=ba6502dccd6649769ccc3921597f6ffa05c9e81f9128cedc6428325fabab20fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
