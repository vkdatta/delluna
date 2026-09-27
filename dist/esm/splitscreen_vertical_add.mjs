export const name="splitscreen_vertical_add";
export const id="dl_948e46c705e15c92666e";
export const url=new URL("../icons/splitscreen_vertical_add.svg?v=bba7a2866788816bf10a1d7a3c3fb17b494b9f131f33895b6b37cd42929ae635",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
