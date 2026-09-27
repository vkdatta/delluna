export const name="stars_2-fill";
export const id="dl_31421f71558ecd2bd974";
export const url=new URL("../icons/stars_2-fill.svg?v=8269688694adc9a444f592c20c299b012fc3af964500c945a0b57167aad444a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
