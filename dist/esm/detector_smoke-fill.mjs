export const name="detector_smoke-fill";
export const id="dl_98438bcdd761ebccd97b";
export const url=new URL("../icons/detector_smoke-fill.svg?v=b0f40d5ae9779b8c64a0e636b0af3a987b8270c8edc1447785196abcc5baa3f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
