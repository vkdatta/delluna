export const name="grid-nine-thin";
export const id="dl_f1a44169ba39469aaf43";
export const url=new URL("../icons/grid-nine-thin.svg?v=910f3267388344d3ddd0d380097694066933ebc43623a760615a74a420223a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
