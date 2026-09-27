export const name="baby-carriage";
export const id="dl_980fa824f85145c5ac31";
export const url=new URL("../icons/baby-carriage.svg?v=3fd55d8587f574da887fb58c57a598c2a6c0fa21a85f19bf633cee3ef32cf3cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
