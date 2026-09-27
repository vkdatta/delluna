export const name="warning-octagon-fill";
export const id="dl_0ec434194d9914b75768";
export const url=new URL("../icons/warning-octagon-fill.svg?v=1d840b40a207ac47943f8d5056a7fda53e6c0fe78bace2fc671811855e52de68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
