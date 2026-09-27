export const name="skull";
export const id="dl_f86c52d20244f5caca58";
export const url=new URL("../icons/skull.svg?v=b8058739acf1331759758d0e78112c8beed0d9e164c4e8ddddd2a97de22d0085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
