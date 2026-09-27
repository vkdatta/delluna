export const name="arrow-square-in-fill";
export const id="dl_279380e356194fd6bc4c";
export const url=new URL("../icons/arrow-square-in-fill.svg?v=0715370c903d5cf8be61147d4603524c36111e784db638fc399748ff32b3c302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
