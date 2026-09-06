export const name="battery-warning-vertical-duotone";
export const id="dl_2bfe88e3ec104e58bb38";
export const url=new URL("../icons/battery-warning-vertical-duotone.svg?v=efc17191546ae6929422d45d2b370fe25dbe7e55eb6e16b2dccde6a629933481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
