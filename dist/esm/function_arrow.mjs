export const name="function_arrow";
export const id="dl_4ef508e8b149469785a9";
export const url=new URL("../icons/function_arrow.svg?v=24bc0f464f014077e9888727dbb2ae3da6d184ee4ed8ac65e0266711a0442907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
