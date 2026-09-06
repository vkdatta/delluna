export const name="dots-three-circle-vertical-duotone";
export const id="dl_2e5ce492d4334c0a8f79";
export const url=new URL("../icons/dots-three-circle-vertical-duotone.svg?v=c566303eb90c9b0e231d8a1a9ed0bf9681497c481d941c54e1d9f8ebfb84645e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
