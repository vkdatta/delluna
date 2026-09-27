export const name="text-h-four";
export const id="dl_12c745da3befa96f88f0";
export const url=new URL("../icons/text-h-four.svg?v=981db3f80fd53daa9b4ac83ec7fa52f46ee1bd57af7a7d2a03b08c851df07986",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
