export const name="arrow-u-right-down-duotone";
export const id="dl_5f31eec661f546ca9763";
export const url=new URL("../icons/arrow-u-right-down-duotone.svg?v=919ccdd051bd15e040d4be6b625b73921a4f27d3ce95bd7de3b3b1e2ed67c7a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
