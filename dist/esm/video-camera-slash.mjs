export const name="video-camera-slash";
export const id="dl_d1f219a4f2394acba883";
export const url=new URL("../icons/V/video-camera-slash.svg?v=f319e2f86632e72ebcf6825632455c9ebdcb1defefcb53da75b5f2c225d22714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
