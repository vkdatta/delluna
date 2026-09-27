export const name="mode_fan_off";
export const id="dl_3ffee0e53bdf89c80c5a";
export const url=new URL("../icons/mode_fan_off.svg?v=a9ceace167ab901f7f57d23e3730d0965c5a516d6d2776bdbea3fe593d48c4ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
