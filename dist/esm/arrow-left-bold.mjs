export const name="arrow-left-bold";
export const id="dl_d5bb7e4248df4a8aa0b2";
export const url=new URL("../icons/arrow-left-bold.svg?v=9c88efad8685bb7ed23cf7770c354609803090cca9d189373271a34de64ee322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
