export const name="outpatient_med-fill";
export const id="dl_dff5112974c2ee2f8b75";
export const url=new URL("../icons/outpatient_med-fill.svg?v=07473a9444783f6d1d94724c8892b4b5f7f88fce0ae2c8721d5036c7d59e3f87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
