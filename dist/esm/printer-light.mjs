export const name="printer-light";
export const id="dl_4fc1c2a025c14fd3bf2e";
export const url=new URL("../icons/printer-light.svg?v=90b3b3fa92948a0151acaa502af14aae6a4f4a32cc2a3fea4e524e10cabd2143",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
