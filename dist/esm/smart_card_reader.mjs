export const name="smart_card_reader";
export const id="dl_8201a4a6a02031425b85";
export const url=new URL("../icons/smart_card_reader.svg?v=318355d00f8fba816e120028fc29332a2475d3cacd13879b9ef4277c6c855c88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
