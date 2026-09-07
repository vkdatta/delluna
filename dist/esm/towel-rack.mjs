export const name="towel-rack";
export const id="dl_908187b6a64d4e01816d";
export const url=new URL("../icons/towel-rack.svg?v=feabfc4540faf52ebe2396102a42e6a71e6aa0743769ca89091ef785b71e1972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
