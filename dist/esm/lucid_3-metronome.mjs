export const name="lucid_3-metronome";
export const id="dl_9ca13450156a42eb82a9";
export const url=new URL("../icons/lucid_3-metronome.svg?v=9f5b492b3e84b3048128c1aa064ff5f7a5783ad71db7e83a89c92de9becb297d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
