export const name="mosque-duotone";
export const id="dl_eb796216b3b14c7d9e8b";
export const url=new URL("../icons/mosque-duotone.svg?v=96effe330c61a7882d4b986e7071109b47c02fdd3fcec386ae98bb934c260537",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
