export const name="grains-slash-bold";
export const id="dl_91670d3057244bd5a828";
export const url=new URL("../icons/grains-slash-bold.svg?v=624f6875d4fe62c4148b57c370dc018b257e1bcf04fe33c2e3a7852e7b08e061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
