export const name="picnic-table";
export const id="dl_0c15448ee0374d248d35";
export const url=new URL("../icons/picnic-table.svg?v=cf948af9f0cbfb3675b99ec59f106685826189c5b763e8a6e619fb85394aed07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
