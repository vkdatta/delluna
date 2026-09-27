export const name="store-fill";
export const id="dl_833569f2021fe19069b0";
export const url=new URL("../icons/store-fill.svg?v=af870a1542e56510ca43fcfc72c327d5cd0c5179790da911f08b259817479508",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
