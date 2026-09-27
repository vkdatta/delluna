export const name="rocket-launch-duotone";
export const id="dl_828c04f529df4336bc74";
export const url=new URL("../icons/rocket-launch-duotone.svg?v=0c9945815c748834b45870633646511006fc54dab788c32a8765a3c4b83e79ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
