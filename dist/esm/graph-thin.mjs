export const name="graph-thin";
export const id="dl_18681c065f1e4e848100";
export const url=new URL("../icons/graph-thin.svg?v=780a11c89813d0c8f597a083f80e51c87bdf1718a911504877477e3d74495094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
