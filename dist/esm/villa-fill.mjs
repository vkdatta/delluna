export const name="villa-fill";
export const id="dl_4f108598a36c0683c50b";
export const url=new URL("../icons/villa-fill.svg?v=c1a0a4277f7cfdce0ba432081621d865c94b5172284ce173df118291691fe0f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
