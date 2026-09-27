export const name="drop-simple-duotone";
export const id="dl_b5f5867d47d24be382c6";
export const url=new URL("../icons/drop-simple-duotone.svg?v=d7eb234d267e153fd06c214709249ac301a5e87e05fdde223f9bdbcbb9def567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
