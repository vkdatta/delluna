export const name="text-superscript-bold";
export const id="dl_c084d13216e5ae8432c0";
export const url=new URL("../icons/text-superscript-bold.svg?v=8533ac23a04105e4ba28e700066b91adb6715deea9495f8e33570e1974b35cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
