export const name="lucid_2-frame";
export const id="dl_6d73f418d6d94e56b751";
export const url=new URL("../icons/lucid_2-frame.svg?v=03680a62b5768d07bd01135eda87002c4012706506376646f3d418ea159ba066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
