export const name="battery-vertical-full-bold";
export const id="dl_52bbdc0ae3144050a979";
export const url=new URL("../icons/battery-vertical-full-bold.svg?v=051e70801395446e1928bae97efdba011a8ebc6ecad27fc42c8f9678715c5020",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
