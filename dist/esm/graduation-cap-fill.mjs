export const name="graduation-cap-fill";
export const id="dl_7db4d5a99fc540e5afbf";
export const url=new URL("../icons/graduation-cap-fill.svg?v=bcea14cab759af2ef015025cd3366d8ef6eafa52fcc2b765f704220734fa46c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
