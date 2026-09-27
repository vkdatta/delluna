export const name="flash_off";
export const id="dl_58f73d56e30538565676";
export const url=new URL("../icons/flash_off.svg?v=e97722bf97df92fb3ec057a9875d16399e8f140ee37af86c172074ca65345d6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
