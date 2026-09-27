export const name="difference";
export const id="dl_50fd04b5a4ef5e2439d8";
export const url=new URL("../icons/difference.svg?v=2ef022681ccacfd4ef123c8b868557afbf59617202f9ed644b88a3157864e5fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
