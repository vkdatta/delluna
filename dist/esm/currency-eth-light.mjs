export const name="currency-eth-light";
export const id="dl_723a34a47bb84287ba6c";
export const url=new URL("../icons/currency-eth-light.svg?v=ab77dc230ae5f2de6106da5c329fd7339107abdcbca1baf892abbfb1f2091680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
