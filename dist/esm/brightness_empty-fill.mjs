export const name="brightness_empty-fill";
export const id="dl_e5ae89ad12572dffee6e";
export const url=new URL("../icons/brightness_empty-fill.svg?v=4f9f91efa091ea9f74ca91e8964b94fe213c37e901fe89fc7a6e307a0c08cec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
