export const name="mode_cool_off-fill";
export const id="dl_99549abb1def4f0c9041";
export const url=new URL("../icons/M/mode_cool_off-fill.svg?v=960473f01db8cf368132a920971da6fcdace02a07abdbe13ca5c1b5ccfd58019",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
