export const name="thermometer_loss-fill";
export const id="dl_ce25b14f93cb97bea4be";
export const url=new URL("../icons/thermometer_loss-fill.svg?v=4e58574573a95e2b9daaccec5e0d1018fade0b88c745a0cbfdb16700e49b1c00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
