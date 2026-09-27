export const name="tornado-duotone";
export const id="dl_9a29be2d996e34cd7954";
export const url=new URL("../icons/tornado-duotone.svg?v=4aebeb7812142efbbc39fec93ef38d44faf4ab96ba98ccd2e95f30f0c0a79f99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
