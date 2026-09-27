export const name="mode_fan-fill";
export const id="dl_3759739f9bb3446a1ad2";
export const url=new URL("../icons/mode_fan-fill.svg?v=e915305178ccee63df6e52d7350bf15259e9ca94b96321e95ac088b4e4b6f1de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
