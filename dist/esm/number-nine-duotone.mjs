export const name="number-nine-duotone";
export const id="dl_1d9a35aa53c94957953c";
export const url=new URL("../icons/number-nine-duotone.svg?v=03e873e76b715c5c1615abe0449d877edb8a060653c474317ba12fbbbdec8cef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
