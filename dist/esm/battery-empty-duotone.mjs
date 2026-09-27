export const name="battery-empty-duotone";
export const id="dl_b4a9974ef67d424aa672";
export const url=new URL("../icons/battery-empty-duotone.svg?v=7d954b2840c0a609a9fb537b3ff6299e426abfa28a47c06388ee91f7fcddc079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
