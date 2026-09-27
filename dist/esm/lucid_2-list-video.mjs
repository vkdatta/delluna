export const name="lucid_2-list-video";
export const id="dl_e4df14f46a404a97957e";
export const url=new URL("../icons/lucid_2-list-video.svg?v=9531061e85163e2c1f0a7baf55caf877a07f6cb1a16d20d1f295ad4410b6d79a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
