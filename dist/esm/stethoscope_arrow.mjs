export const name="stethoscope_arrow";
export const id="dl_b4960c84fa95c34d31ac";
export const url=new URL("../icons/stethoscope_arrow.svg?v=2b55124b7a5b2c6b6f25e6173b45edf05739f49da29c5e84c0af8d5e613a1cad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
