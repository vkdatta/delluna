export const name="text-align-center-bold";
export const id="dl_570265e93b5fedc78353";
export const url=new URL("../icons/text-align-center-bold.svg?v=610cbeaf37f0b7bc4fe64e4bdc7ef14cf5e86617407ea82a3d9b4993b4889ea7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
