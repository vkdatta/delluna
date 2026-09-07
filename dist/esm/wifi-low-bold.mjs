export const name="wifi-low-bold";
export const id="dl_9c31278c5da14ed9b60c";
export const url=new URL("../icons/W/wifi-low-bold.svg?v=f389dcb59dc3265a6f3201382a6f6652451dfd3edd6c5f1626d6924cf14dc196",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
