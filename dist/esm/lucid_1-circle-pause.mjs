export const name="lucid_1-circle-pause";
export const id="dl_af6e347f7feb465e8ad8";
export const url=new URL("../icons/lucid_1-circle-pause.svg?v=42fb0d4d5f585ce0df1d3c886573e0b119feba4ead509e8400258ff7699a8050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
