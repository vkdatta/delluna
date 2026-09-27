export const name="detector_smoke-fill";
export const id="dl_003ca45c1fb1a0f3b998";
export const url=new URL("../icons/detector_smoke-fill.svg?v=1daa920f409c29adab92a37a35f1f14476229cb8f16a5f35487af3f45935ed66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
