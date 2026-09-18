export const name="play_arrow-fill";
export const id="dl_05d0ee3b6b644936be5e";
export const url=new URL("../icons/play_arrow-fill.svg?v=8fd1c8c28f97cd14c498663dde752bbae9d46568a5b25725f0847d04ddc09997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
