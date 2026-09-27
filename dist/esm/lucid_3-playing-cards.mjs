export const name="lucid_3-playing-cards";
export const id="dl_5efcaf8fb53e4b49ac85";
export const url=new URL("../icons/lucid_3-playing-cards.svg?v=50603d685dbae921a17e60d0f7a6e7ab301631950f59c6c35f78ba5266b2c486",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
