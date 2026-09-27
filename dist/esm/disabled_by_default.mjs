export const name="disabled_by_default";
export const id="dl_1e4149de26fa50ddb47a";
export const url=new URL("../icons/disabled_by_default.svg?v=983c88cdb8dceb96e191219605814f669ae5ae64305a97444f620b9368fc6cfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
