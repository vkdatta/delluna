export const name="stockpot";
export const id="dl_32a094fad37c4ce3bd9c";
export const url=new URL("../icons/stockpot.svg?v=e6f4ab5043410ab74b057ad3f7cc80f98d54cc667c88322945429b4b41212d43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
