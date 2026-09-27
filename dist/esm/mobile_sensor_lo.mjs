export const name="mobile_sensor_lo";
export const id="dl_54da920220646d00ef29";
export const url=new URL("../icons/mobile_sensor_lo.svg?v=d28a00fe6905f8e7007b93b13b1cc9601e8a7af093679fdca8885a757584086d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
