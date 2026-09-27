export const name="widget_medium-fill";
export const id="dl_6bc17d829134dc273770";
export const url=new URL("../icons/widget_medium-fill.svg?v=8c64eca2dae3ca29d4a0a93783a820b0cadb58765323686fadc5ea6b6d386cd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
