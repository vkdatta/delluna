export const name="lucid_1-blinds";
export const id="dl_16ce83cc18a1466e9917";
export const url=new URL("../icons/lucid_1-blinds.svg?v=b8e170e7050f54bfc8aa5f1c13342724c9a442c099eed4e22ccf9d11414c19f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
