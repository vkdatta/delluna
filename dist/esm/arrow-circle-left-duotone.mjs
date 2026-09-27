export const name="arrow-circle-left-duotone";
export const id="dl_bf670fafe49b41d9ad25";
export const url=new URL("../icons/arrow-circle-left-duotone.svg?v=5ee20c282c85a8ff6c59056e4cf495e564325a1512f09f375ffafc5123aa4118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
