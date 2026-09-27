export const name="punch_clock-fill";
export const id="dl_34c890dde506aee0ccbe";
export const url=new URL("../icons/punch_clock-fill.svg?v=8bb26a472f8485dc68ff0a7688286aa5f33494331af0a19f809d6a0590763a83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
