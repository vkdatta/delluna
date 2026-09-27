export const name="target";
export const id="dl_cfac8ad2a1f2945e7bd7";
export const url=new URL("../icons/target.svg?v=7a638da3da4fabce29f1517611e627b73c14b062a02fe2b4e9e96701c9cc5650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
