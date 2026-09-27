export const name="video-light";
export const id="dl_daa0f4334b133328cfc7";
export const url=new URL("../icons/video-light.svg?v=8a25294ed648bdc97544c2a72671d82d7d751e40299c1f48ed3de0a93df6efab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
