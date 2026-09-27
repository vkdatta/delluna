export const name="heat_pump-fill";
export const id="dl_5726bc44982c3b0b1ac4";
export const url=new URL("../icons/heat_pump-fill.svg?v=ffa4b8d63426764bc8babbbc45e5bf079b4d1bbf03a41309d2e5cf7e7eba567b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
