export const name="bridge";
export const id="dl_7c165ba24cc045aaa4e9";
export const url=new URL("../icons/bridge.svg?v=fc2edcf68afb931b4974ec05018ebfef187a0f487e0b16c1a980c6398655862b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
