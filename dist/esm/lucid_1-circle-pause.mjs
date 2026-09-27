export const name="lucid_1-circle-pause";
export const id="dl_af6e347f7feb465e8ad8";
export const url=new URL("../icons/lucid_1-circle-pause.svg?v=f101c56ea493e2a090fa3914f79e77483a66dca169d922844d2fcdc1e5abd5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
