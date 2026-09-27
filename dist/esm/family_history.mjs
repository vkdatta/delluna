export const name="family_history";
export const id="dl_8427aaf33b49bc17e58a";
export const url=new URL("../icons/family_history.svg?v=aeccea64b6f32fc8c07844d3e2e19d784ac6247c43d72a79db22751e77782765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
