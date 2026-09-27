export const name="mode_fan_off";
export const id="dl_2923c85fcd5c365d09ad";
export const url=new URL("../icons/mode_fan_off.svg?v=0ac20ab717c1d11b3766facf49bd9466b029d7ba9757e1360efceccdcd50a34c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
