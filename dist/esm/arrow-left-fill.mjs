export const name="arrow-left-fill";
export const id="dl_52c54e2fc5d94c85b264";
export const url=new URL("../icons/arrow-left-fill.svg?v=f4a55cf9204e44e7dd6374a9fc0db49b62b3853beb01085f1251935504b7fd78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
