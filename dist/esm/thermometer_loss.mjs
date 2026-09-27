export const name="thermometer_loss";
export const id="dl_507bfcbe45c46dbbd141";
export const url=new URL("../icons/thermometer_loss.svg?v=748e9ba555860112712adb47479e220f0e25abfef895a55667d0dbbd8266927b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
