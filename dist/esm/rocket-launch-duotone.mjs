export const name="rocket-launch-duotone";
export const id="dl_828c04f529df4336bc74";
export const url=new URL("../icons/rocket-launch-duotone.svg?v=099d7c666658c9e8053e62e3014ef99e7175a1d47b827c4122d444228617cea7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
