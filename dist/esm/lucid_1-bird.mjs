export const name="lucid_1-bird";
export const id="dl_ae1ca096dfda48d59ab0";
export const url=new URL("../icons/lucid_1-bird.svg?v=41999fa33e57e4b269aed000f62c98cd01ff993627ff0ddca260b431828c9ba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
