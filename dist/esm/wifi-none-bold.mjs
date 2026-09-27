export const name="wifi-none-bold";
export const id="dl_631b1087ccd3c61a6e4c";
export const url=new URL("../icons/wifi-none-bold.svg?v=c7322acf933dbce94b72509a3ce0b03b913ee28f1685a21bc4b9c7d971faed30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
