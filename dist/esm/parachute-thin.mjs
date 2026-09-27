export const name="parachute-thin";
export const id="dl_ffd7047a50724d3995be";
export const url=new URL("../icons/parachute-thin.svg?v=3bcf7a95ca6091e16f57a15d43d1cc5fa1171141bd7a0ddc963974cf22b8dfa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
