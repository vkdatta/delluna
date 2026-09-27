export const name="currency-cny";
export const id="dl_8f1795f5217542daa38b";
export const url=new URL("../icons/currency-cny.svg?v=766e98d46af7a61c7833dd221814c3125dab4a4c6ccd1759ff810bf823ce193d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
