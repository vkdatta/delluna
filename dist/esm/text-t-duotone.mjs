export const name="text-t-duotone";
export const id="dl_07a2b7850d1940c29645";
export const url=new URL("../icons/T/text-t-duotone.svg?v=d1ea1cee7b069c45bce9e0141addaa0aef5e6f94aafaba6fb804ea673ac68db1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
