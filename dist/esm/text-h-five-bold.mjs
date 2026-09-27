export const name="text-h-five-bold";
export const id="dl_5855364158cac6673a65";
export const url=new URL("../icons/text-h-five-bold.svg?v=0991e8c2a7deb01fafad9328817bb643d537d86514843cb3feefc323ace84e66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
