export const name="camera-plus-thin";
export const id="dl_a71490caae9c4e679989";
export const url=new URL("../icons/camera-plus-thin.svg?v=03e6916c13b1b0c37f9c85b1d31bb2b084263cac8930dc50fcf1f55da7ada193",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
