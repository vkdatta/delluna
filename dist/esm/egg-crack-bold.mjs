export const name="egg-crack-bold";
export const id="dl_be8e58e6565e4878b96a";
export const url=new URL("../icons/egg-crack-bold.svg?v=c0b66731c6b6c51dff3f8a94bb0ba6d90ee43cf6b2aabaea6da8f28ba7f50840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
