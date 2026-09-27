export const name="mood_bad";
export const id="dl_c6633fc70690594021df";
export const url=new URL("../icons/mood_bad.svg?v=16bff8b848cf2d42413809c23438d7f590aeffbdc150a4a712f02e709ff80d81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
