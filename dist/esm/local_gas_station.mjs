export const name="local_gas_station";
export const id="dl_37e8259792e1361ec83f";
export const url=new URL("../icons/local_gas_station.svg?v=b555b546db899347816e91ad5b4a1d0096288c210fb721d331181a3560cff6a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
