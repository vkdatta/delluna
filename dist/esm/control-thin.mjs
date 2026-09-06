export const name="control-thin";
export const id="dl_330ef4f59e124c07a63d";
export const url=new URL("../icons/control-thin.svg?v=b80f48173410a6296bce666b35eaf9533d8a491d86595cb248330eae5f275197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
