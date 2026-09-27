export const name="virtual-reality";
export const id="dl_2c9e3bfa87004eb3671b";
export const url=new URL("../icons/virtual-reality.svg?v=550069f06fb86bc36a118f96c6b62931bf5ceda47c56ec5eb86132b90613551b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
