export const name="rocket-launch-duotone";
export const id="dl_828c04f529df4336bc74";
export const url=new URL("../icons/rocket-launch-duotone.svg?v=d4caccf2aa11c37305809a59aa6727385b8ad04e35b14e0f6f8e1c47c99e0b13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
