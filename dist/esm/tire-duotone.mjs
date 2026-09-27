export const name="tire-duotone";
export const id="dl_3bd2117c6f00871643a6";
export const url=new URL("../icons/tire-duotone.svg?v=f03fecd0dc4da29ef8dae8068fb175650023fc6e3d5b588ac2e3390e90831913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
