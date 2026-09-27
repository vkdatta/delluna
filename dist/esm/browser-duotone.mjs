export const name="browser-duotone";
export const id="dl_afce4a3d89314cacb9ae";
export const url=new URL("../icons/browser-duotone.svg?v=ade96f69859d38244e1a9b5814e9cf1aa6eb48e2cd4bdfe3ab5b88d9791ab5de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
