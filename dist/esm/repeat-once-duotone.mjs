export const name="repeat-once-duotone";
export const id="dl_fc72e8cc258140268b03";
export const url=new URL("../icons/repeat-once-duotone.svg?v=1ecc8ea2d2dc9ccfb9ad0d121a1fbe36bc4bfee68561889149aae087ca09342e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
