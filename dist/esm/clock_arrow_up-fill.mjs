export const name="clock_arrow_up-fill";
export const id="dl_54f35cde2e6e08fb767a";
export const url=new URL("../icons/clock_arrow_up-fill.svg?v=c9de0a792b32622428d576dffb23beb3290d28f801f83f3c23444fb32ee9ae0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
