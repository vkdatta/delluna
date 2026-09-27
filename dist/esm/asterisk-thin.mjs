export const name="asterisk-thin";
export const id="dl_1158260503a14effbfa5";
export const url=new URL("../icons/asterisk-thin.svg?v=00bd659134d7827fc08f04c03325b4faa0332a9fc7ca06d89037d66d605cbfa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
