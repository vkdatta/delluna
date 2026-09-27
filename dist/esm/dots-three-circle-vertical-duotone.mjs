export const name="dots-three-circle-vertical-duotone";
export const id="dl_2e5ce492d4334c0a8f79";
export const url=new URL("../icons/dots-three-circle-vertical-duotone.svg?v=6e55a09081fa201bd257d647754ebd3ba2f8d268dced6f23ddf3be1ee2de69dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
