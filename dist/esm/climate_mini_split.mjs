export const name="climate_mini_split";
export const id="dl_2c7a839018d117c5183d";
export const url=new URL("../icons/climate_mini_split.svg?v=41d766e20824314bc9082e894142ed660fc40ffd6e68643428cec8b0c61cc931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
