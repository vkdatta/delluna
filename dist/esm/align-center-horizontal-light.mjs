export const name="align-center-horizontal-light";
export const id="dl_1033c33f1e434927bcdd";
export const url=new URL("../icons/align-center-horizontal-light.svg?v=f03c235ec73179cb73625e21b0ed8a2e854923e1a3e2925c937859e6d4817782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
