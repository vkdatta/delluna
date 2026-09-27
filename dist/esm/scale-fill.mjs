export const name="scale-fill";
export const id="dl_c9b7b968aba2eb073f53";
export const url=new URL("../icons/scale-fill.svg?v=b57adb76b4a1a19044509aea506f3cd57fd84640df17ac5e020deaa46e1081bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
