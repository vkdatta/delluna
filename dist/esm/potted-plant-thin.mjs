export const name="potted-plant-thin";
export const id="dl_ca70ee650a1c401799ab";
export const url=new URL("../icons/potted-plant-thin.svg?v=cc2a5ad0431e6aab41b1c2d275c60559222ea2fbb6dd84b36135404152fc8031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
