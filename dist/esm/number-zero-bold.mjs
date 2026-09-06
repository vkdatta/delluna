export const name="number-zero-bold";
export const id="dl_ee0c566ab2524a3e823a";
export const url=new URL("../icons/number-zero-bold.svg?v=e99bed9213ee7912a52fc1b20b2f700846a5696a1d0b260c137a8c5d19899b28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
