export const name="chart-line-duotone";
export const id="dl_88789ca6cea942348a46";
export const url=new URL("../icons/chart-line-duotone.svg?v=ea01d7bf813f997d81afc933db023d7d43f43da171686a4baee0ed0fdd76446a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
