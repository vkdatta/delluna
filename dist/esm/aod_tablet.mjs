export const name="aod_tablet";
export const id="dl_e798064bcf429a0789a7";
export const url=new URL("../icons/aod_tablet.svg?v=6a1c96c74396bc9e0b07be2e36593c32a0f517ea34b867ecc3dd73aa2f8a8450",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
