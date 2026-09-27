export const name="blind-fill";
export const id="dl_fdef80090bba02c7360a";
export const url=new URL("../icons/blind-fill.svg?v=b1d59cc1542c941bcd3e1baf783a824a76a926859f59ae07de71f871ddee892e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
