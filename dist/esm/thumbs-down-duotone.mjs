export const name="thumbs-down-duotone";
export const id="dl_5c33ead60663bfa2b3bc";
export const url=new URL("../icons/thumbs-down-duotone.svg?v=6914bbcdd039a4d000392b11ed88abe3fccd1853efed2b222146f79cfd0c70e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
