export const name="auto_awesome_mosaic";
export const id="dl_bd2d3875773c592be98b";
export const url=new URL("../icons/auto_awesome_mosaic.svg?v=b5287991b9a7faab7020d165cb78fa82749c7f80452eeabbd8a5b3cd930fd5bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
