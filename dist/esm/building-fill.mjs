export const name="building-fill";
export const id="dl_b8def6afbea04353b5fe";
export const url=new URL("../icons/building-fill.svg?v=d370af7caf588a370298be3b8ba28a738b01f819118bc8f807d6a950b0b436e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
