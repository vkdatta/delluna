export const name="mode_cool_off-fill";
export const id="dl_14c4fda08f44353d50ad";
export const url=new URL("../icons/mode_cool_off-fill.svg?v=960473f01db8cf368132a920971da6fcdace02a07abdbe13ca5c1b5ccfd58019",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
