export const name="airplane-takeoff-duotone";
export const id="dl_a8134cbdbd2948498f8e";
export const url=new URL("../icons/airplane-takeoff-duotone.svg?v=2b7a3a1000551b1fa97f4f9474792258a052dc671373932244a5f0ecab8d2295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
