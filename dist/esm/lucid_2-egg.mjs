export const name="lucid_2-egg";
export const id="dl_e855aab83d554052aee7";
export const url=new URL("../icons/lucid_2-egg.svg?v=64f6ed86e5854cd872ebb1917a6ba1e78dd0ce35e29445616f1c00ff9bb75f3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
