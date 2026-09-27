export const name="number-circle-eight-bold";
export const id="dl_3bb8cf6a2bcc4b769109";
export const url=new URL("../icons/number-circle-eight-bold.svg?v=ae4e87d9b3a997bdfe0707e53cc227aa29cca5902ec56e832690124dc1763aef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
