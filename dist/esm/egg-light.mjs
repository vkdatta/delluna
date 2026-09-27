export const name="egg-light";
export const id="dl_af07d635c21f4fd09f00";
export const url=new URL("../icons/egg-light.svg?v=2c453d3c08177bd5f1d45ddb4e446655a374ae75a94eed5023b178dd7fd96858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
