export const name="bluetooth-slash-duotone";
export const id="dl_63f68b7b3e26459384a6";
export const url=new URL("../icons/bluetooth-slash-duotone.svg?v=0b8b4dd958af8d1fa430eba4ee390491634c21a14e64b311e05ee3f57a9e1f28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
