export const name="buildings-light";
export const id="dl_1f0cd87d05f746cb82f1";
export const url=new URL("../icons/buildings-light.svg?v=a0c5e2f9e8a16b3204b4d9967622064984550b01d9f374593fa60e4155496505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
