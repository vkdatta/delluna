export const name="caret-circle-left-bold";
export const id="dl_5948d870ec80479ab8fb";
export const url=new URL("../icons/caret-circle-left-bold.svg?v=7bb8addc17a98611021adef9709769e9b90f9b1f073eeba0b183429ccad8b30e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
