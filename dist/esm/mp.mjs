export const name="mp";
export const id="dl_e224cc189c9b4bb79543";
export const url=new URL("../icons/mp.svg?v=94ae66b257037cd3564bd6fcc24ceea08bb34953a8a47d43c78cd262fe53dad5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
