export const name="caret-up-down-thin";
export const id="dl_ad9b635f634841459df4";
export const url=new URL("../icons/caret-up-down-thin.svg?v=418c03961c3c2c1e27948a4964189a0735e51d5b01e376cb23709ce4d7fe7506",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
