export const name="building-apartment-thin";
export const id="dl_dc5b9ff61d194b8db335";
export const url=new URL("../icons/building-apartment-thin.svg?v=b1e8f5266d7d272a95412f1cdcb7ef2fc9247b0092712685e912240e1f8cbd88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
