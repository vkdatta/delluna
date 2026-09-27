export const name="globe_2_question-fill";
export const id="dl_56ae2c7e11a2edde9361";
export const url=new URL("../icons/globe_2_question-fill.svg?v=1dd0c1b3a2432db6d0f303efd60cb621aa6d3bc49e843f5300d9e8ed7cf638ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
