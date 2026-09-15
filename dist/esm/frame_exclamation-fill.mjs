export const name="frame_exclamation-fill";
export const id="dl_948e92f85a154828acd3";
export const url=new URL("../icons/F/frame_exclamation-fill.svg?v=42f4bd78ddd035f01d049de6b8e150394623aaa613f2e190574e43a5e861d45a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
