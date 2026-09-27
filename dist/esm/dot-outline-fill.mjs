export const name="dot-outline-fill";
export const id="dl_44a905ac3fb746408ac7";
export const url=new URL("../icons/dot-outline-fill.svg?v=040f58f31d61d9ddf8e480b2f55887c2b3fd80987dd8dd92230d0198bfcbebec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
