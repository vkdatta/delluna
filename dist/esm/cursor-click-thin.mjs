export const name="cursor-click-thin";
export const id="dl_7f0081dbf81049598671";
export const url=new URL("../icons/cursor-click-thin.svg?v=0a1e80fa49e2e697f6bb0cf556d488779ad88b638680313c0d0d06b03fa11600",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
