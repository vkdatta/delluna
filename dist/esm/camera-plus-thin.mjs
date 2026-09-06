export const name="camera-plus-thin";
export const id="dl_a71490caae9c4e679989";
export const url=new URL("../icons/camera-plus-thin.svg?v=5a0cd9938443b607d933f5cf1e5433fefe45b981c4a2b7038334451ab7324197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
