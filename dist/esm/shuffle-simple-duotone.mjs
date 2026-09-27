export const name="shuffle-simple-duotone";
export const id="dl_b571b5a6b32c7ab6f8b0";
export const url=new URL("../icons/shuffle-simple-duotone.svg?v=431ba222a66460bdc9a3a368f6dd060ef4e7140ec7f7201bd10ed3fb9373e551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
