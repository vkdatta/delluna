export const name="battery-empty-duotone";
export const id="dl_b4a9974ef67d424aa672";
export const url=new URL("../icons/battery-empty-duotone.svg?v=561870274e0775bd26593199daa50c66100752e84392089c703ff8cf36a62136",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
