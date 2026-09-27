export const name="bluetooth";
export const id="dl_5b434b37345f46aba29b";
export const url=new URL("../icons/bluetooth.svg?v=48d396cca1e68f6e71568f4ad0c981690f47ba45d8fe0a91d3d89b6581d954d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
