export const name="arrow-fat-down-light";
export const id="dl_b86138603114489e8b9e";
export const url=new URL("../icons/arrow-fat-down-light.svg?v=94ca1d5bdd7657994412fbda61765c88468178a8dee469d04091c53f7f5c1f85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
