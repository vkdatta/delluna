export const name="battery_android_bolt-fill";
export const id="dl_683d6b1a89cabf28cb6f";
export const url=new URL("../icons/battery_android_bolt-fill.svg?v=67039faec906a4cfbb9c960aa3b9b8908ed6203204e10f4414e94a452bf2c1f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
