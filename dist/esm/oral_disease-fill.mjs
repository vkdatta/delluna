export const name="oral_disease-fill";
export const id="dl_12e7084e89eccd13674f";
export const url=new URL("../icons/oral_disease-fill.svg?v=fa1168babc8d6c6014352f17d335d65eada7b7f8347cf2200fc5eaa26657420d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
