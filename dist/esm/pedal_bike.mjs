export const name="pedal_bike";
export const id="dl_d47b5c589b8648f7a868";
export const url=new URL("../icons/P/pedal_bike.svg?v=249ab6a70a264c65983f56a5a599a8b0b7bf375bc5994d2201d0a164d8b625bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
