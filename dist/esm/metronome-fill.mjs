export const name="metronome-fill";
export const id="dl_4eae104980294e10a7a6";
export const url=new URL("../icons/metronome-fill.svg?v=1b2d2645756f9cce5e20bd7870b4a7b55bad56e94fc03da98b9d4ab623e207f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
