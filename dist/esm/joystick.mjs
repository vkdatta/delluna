export const name="joystick";
export const id="dl_14c657ca3a7fd6f1c37e";
export const url=new URL("../icons/joystick.svg?v=033800e0198c06bbd55c96d3ac7b73824b4396134a161137bfd62415941b23ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
