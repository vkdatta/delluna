export const name="golf-bold";
export const id="dl_d7cc239b9207442ca891";
export const url=new URL("../icons/golf-bold.svg?v=86d1b6eb04bd2ee368c578804698f04c67b30ddeba26f57bf928be37083086db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
