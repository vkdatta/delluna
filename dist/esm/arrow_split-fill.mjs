export const name="arrow_split-fill";
export const id="dl_52a20737495f87372d00";
export const url=new URL("../icons/arrow_split-fill.svg?v=977b8acf4054863b4dccd54c8644e6330256e2b6e668b993784be4475ce73631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
