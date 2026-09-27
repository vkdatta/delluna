export const name="mic_double-fill";
export const id="dl_885ffe42f1a2316c948c";
export const url=new URL("../icons/mic_double-fill.svg?v=c3c806ac17a877c8754395b3ab8703e261f96d6c4d0d63499b96f57ba8fc53db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
