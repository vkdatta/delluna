export const name="background_replace-fill";
export const id="dl_495896d6cb1319e8b987";
export const url=new URL("../icons/background_replace-fill.svg?v=83680dae0207fbfa52038a376456cfc31050840b2354c059155b29f7abe5ea6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
