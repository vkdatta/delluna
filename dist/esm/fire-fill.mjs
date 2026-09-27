export const name="fire-fill";
export const id="dl_84109c3827df4c32a62f";
export const url=new URL("../icons/fire-fill.svg?v=caf98ca9615854d6d294be1b099db80de39d683aab4755f0c0d3bf6e86956f6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
