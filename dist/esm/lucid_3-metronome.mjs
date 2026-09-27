export const name="lucid_3-metronome";
export const id="dl_9ca13450156a42eb82a9";
export const url=new URL("../icons/lucid_3-metronome.svg?v=14c8bd077dd763619d6b6c1df3fbf729e6b66c4b38214f1aeb8c8d20dc3a45b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
