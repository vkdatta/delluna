export const name="boat-fill";
export const id="dl_788e8f36c9b94069b3ee";
export const url=new URL("../icons/boat-fill.svg?v=6ba5d06831d41cbdd951feb5e85387a3ad99ebe8afebaf8d58021a9fb886747e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
