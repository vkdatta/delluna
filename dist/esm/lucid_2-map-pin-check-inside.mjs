export const name="lucid_2-map-pin-check-inside";
export const id="dl_c3bf1a6f3f4643bda626";
export const url=new URL("../icons/lucid_2-map-pin-check-inside.svg?v=9056a499adb99f117c146c009df10f1bfd2428aa7ffed34069420ecfe51dd833",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
