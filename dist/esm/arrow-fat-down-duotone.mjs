export const name="arrow-fat-down-duotone";
export const id="dl_1c2ad9ba224749acb615";
export const url=new URL("../icons/arrow-fat-down-duotone.svg?v=c8650100c8cef4f69065f628727ab9d32b2d6030c1b72357eb1e067fb9c196b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
