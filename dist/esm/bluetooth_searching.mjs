export const name="bluetooth_searching";
export const id="dl_f47308704691458af681";
export const url=new URL("../icons/bluetooth_searching.svg?v=f7390e2509335e6f9c6a622be387c8f5d74c2269449e1be498c39d4ed775e793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
