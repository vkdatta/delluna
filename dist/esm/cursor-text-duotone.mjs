export const name="cursor-text-duotone";
export const id="dl_7fdde463fede4f2c8fe0";
export const url=new URL("../icons/cursor-text-duotone.svg?v=f0a1f09af7938ab571b34aa85fc39d8105e104a75e3b0648ed4ec14fa161d5e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
