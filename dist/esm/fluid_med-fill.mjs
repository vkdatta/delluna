export const name="fluid_med-fill";
export const id="dl_bb395feffbb64e0ea5df";
export const url=new URL("../icons/fluid_med-fill.svg?v=6aad6ecd7708aa8971ff5e6f853640cf61c36d52e48b805294a279283398f7c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
