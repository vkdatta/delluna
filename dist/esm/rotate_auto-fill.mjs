export const name="rotate_auto-fill";
export const id="dl_262017ee686e80cc0bbd";
export const url=new URL("../icons/rotate_auto-fill.svg?v=d48f9e3807e906df380d33bc437b500c7d2f22865b3b6ec0e62213e532c7a489",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
