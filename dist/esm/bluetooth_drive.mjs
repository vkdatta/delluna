export const name="bluetooth_drive";
export const id="dl_bd033339af76445db10f";
export const url=new URL("../icons/bluetooth_drive.svg?v=342bf217191dc162a752e606cc5b441f4a510831c1738f7139d6745d723194c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
