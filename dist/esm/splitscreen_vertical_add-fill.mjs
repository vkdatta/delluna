export const name="splitscreen_vertical_add-fill";
export const id="dl_8406207e86c8fd83b21f";
export const url=new URL("../icons/splitscreen_vertical_add-fill.svg?v=7ee8be5e289ab0a1aacfb6ca8e57334f45f36e034e34cc73379e3e8fcc592606",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
