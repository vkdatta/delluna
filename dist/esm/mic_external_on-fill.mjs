export const name="mic_external_on-fill";
export const id="dl_fb5faccf60073a050f4c";
export const url=new URL("../icons/mic_external_on-fill.svg?v=821d6af3208d4f5962a37be4ffb6f0311c9f456eeb408a5ca289a97af36f241b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
