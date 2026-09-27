export const name="universal_local";
export const id="dl_6591d5959b11cd1547e9";
export const url=new URL("../icons/universal_local.svg?v=b1cb6e5b170bd16bf1f46dfff872d191a0828bd44897f7ceae3873ee6ba04f36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
