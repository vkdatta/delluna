export const name="cursor-fill";
export const id="dl_fbcbca775dde4d0e8110";
export const url=new URL("../icons/cursor-fill.svg?v=bdaf3aa087ea2fa1dfbe4cf9a5b16ce943a4f7f0252572bf86207eb5405c4b9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
