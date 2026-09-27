export const name="baby_changing_station-fill";
export const id="dl_e698ff11d4754b062899";
export const url=new URL("../icons/baby_changing_station-fill.svg?v=ade192ee60d833334dddfe4736d58218ae14cf840dc58a42f9a969ea5fe9cae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
