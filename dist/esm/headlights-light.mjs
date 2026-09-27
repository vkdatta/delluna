export const name="headlights-light";
export const id="dl_843c1a271533451fa3f9";
export const url=new URL("../icons/headlights-light.svg?v=377cd908925de66b350eb11a99df0d271d3bd5e3afe79a176bbba89caaa75d75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
