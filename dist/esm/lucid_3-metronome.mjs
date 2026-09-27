export const name="lucid_3-metronome";
export const id="dl_9ca13450156a42eb82a9";
export const url=new URL("../icons/lucid_3-metronome.svg?v=5e2fce293ba9bb23965e8b531edb0e7f115053274b3383d7d1734fb098bce08e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
