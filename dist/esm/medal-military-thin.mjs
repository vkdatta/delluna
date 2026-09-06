export const name="medal-military-thin";
export const id="dl_5261579b861044f09694";
export const url=new URL("../icons/medal-military-thin.svg?v=76e4bd912d06a49b4b3a4ac6948e8a41b7564ce5149431e1377f91490332e979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
