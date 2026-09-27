export const name="tactic-fill";
export const id="dl_51e16879da39e2acfc21";
export const url=new URL("../icons/tactic-fill.svg?v=b54cddc1d59ae53273c05a58966183579d2696e6d5bec31ccdd4b977fc559934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
