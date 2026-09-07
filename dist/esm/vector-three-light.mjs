export const name="vector-three-light";
export const id="dl_b062996e970846ffa7ae";
export const url=new URL("../icons/V/vector-three-light.svg?v=3e7fbd8214b68be3d69cf348177d9cf183cc5f9a7101de24371adfe833231fc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
