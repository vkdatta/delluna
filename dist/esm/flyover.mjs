export const name="flyover";
export const id="dl_5274c05afe6a416693a2";
export const url=new URL("../icons/flyover.svg?v=bdba6cb95b64c2e5d0e351b15de81e57558d827d59f6bbab1449183f363f040a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
