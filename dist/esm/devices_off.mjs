export const name="devices_off";
export const id="dl_3bbc3e447c97e7a110c3";
export const url=new URL("../icons/devices_off.svg?v=3a6ece33ce79d05041b048dc0b45d2e73d3da0554bab0f9319748322b151cce1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
