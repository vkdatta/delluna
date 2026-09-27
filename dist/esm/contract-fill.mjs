export const name="contract-fill";
export const id="dl_019f1d46162cdb7eef57";
export const url=new URL("../icons/contract-fill.svg?v=3d76c888c930fd0d38e4bc2c86cb2d06f448b0cbab07af48119e34229480a197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
