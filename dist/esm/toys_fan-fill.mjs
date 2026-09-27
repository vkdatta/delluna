export const name="toys_fan-fill";
export const id="dl_e95d9f476e6b21372da7";
export const url=new URL("../icons/toys_fan-fill.svg?v=f180fa4dcaa202a8e5d8d69d48c9002aa5ed68ee5f6fa089269fa31178a33996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
