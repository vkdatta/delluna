export const name="text-t-slash-duotone";
export const id="dl_10141b2534ebb4423089";
export const url=new URL("../icons/text-t-slash-duotone.svg?v=70f185add730fa90789411123e60d7ee2331f3a6f846119572d7c64c716880d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
