export const name="stream-fill";
export const id="dl_423ca321705c29603ac5";
export const url=new URL("../icons/stream-fill.svg?v=7b93b3a64dd41ebca615e9546fbe6791b32589ef6900653a04de2d80f8f0e0d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
