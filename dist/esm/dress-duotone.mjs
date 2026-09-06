export const name="dress-duotone";
export const id="dl_9117d02ad8f843c5be5d";
export const url=new URL("../icons/dress-duotone.svg?v=a08c8d56c58581a780743f603b0d57928912de04700084cf9b16f9c33f13c89d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
