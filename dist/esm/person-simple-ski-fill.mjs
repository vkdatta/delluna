export const name="person-simple-ski-fill";
export const id="dl_4b5fbb2bf5754e1aa405";
export const url=new URL("../icons/person-simple-ski-fill.svg?v=2383083b842aff404e321fa8fd419d0459a44ad0a28508df4628596a5ed62de0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
