export const name="dinner_dining-fill";
export const id="dl_02aed8d3a7e643adb35a";
export const url=new URL("../icons/dinner_dining-fill.svg?v=4322a9df15afbcf89101608ed01802424489509021bfee7d57330c047f56ec01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
