export const name="arrows-left-right-duotone";
export const id="dl_80dcd22ccb0a4081832c";
export const url=new URL("../icons/arrows-left-right-duotone.svg?v=1606ca2b7ebc1980713c59c4a366a9dbd17e34fe96579adc48b206142ab21968",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
