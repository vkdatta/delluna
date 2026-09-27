export const name="dock_to_bottom";
export const id="dl_126ef0ebfae8e386aa6e";
export const url=new URL("../icons/dock_to_bottom.svg?v=19dc0383d46029d0b8533291693404bba8832f8d52ea73dbe7bb5688d839d681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
