export const name="lucid_1-bluetooth-searching";
export const id="dl_5ab9741d25e241759ee4";
export const url=new URL("../icons/lucid_1-bluetooth-searching.svg?v=cdb789c0c3982ee6585b0d1b13356b79061af430fa372968dfc8f3dab7e99c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
