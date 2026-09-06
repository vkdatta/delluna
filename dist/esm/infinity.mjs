export const name="infinity";
export const id="dl_24cb7c57dc7a48e9a6d5";
export const url=new URL("../icons/infinity.svg?v=9db83e8700b9326601896e8e886bbaa0fedc8870e6f002728af7ea5da90c48d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
