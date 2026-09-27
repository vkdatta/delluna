export const name="less-than-bold";
export const id="dl_6c256ae87fcb4678a997";
export const url=new URL("../icons/less-than-bold.svg?v=604ad15804093b91d06174f41c19d64be769022c652f1c00be50e1eec64fffee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
