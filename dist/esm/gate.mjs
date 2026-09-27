export const name="gate";
export const id="dl_53ccdfc2f48cf3dab473";
export const url=new URL("../icons/gate.svg?v=f3da8956f1fbfa37a3d9f069cea7545658f09ef3b0c7f936c9018a6d8f42df79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
