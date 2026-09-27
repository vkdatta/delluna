export const name="earthquake-fill";
export const id="dl_5fa2cf2ddfe2eebb31ad";
export const url=new URL("../icons/earthquake-fill.svg?v=3fa0d35c550fa4de112e5e1b8575c5723323631987ff8c493055cdb7178971f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
