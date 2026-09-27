export const name="battery-warning-vertical-fill";
export const id="dl_ffcff4747b194809a06c";
export const url=new URL("../icons/battery-warning-vertical-fill.svg?v=3a83d70aeedb854ad886a272c92a8b733e3840b991f58702db073c61ae7cd000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
