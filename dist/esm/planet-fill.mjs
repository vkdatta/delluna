export const name="planet-fill";
export const id="dl_90c8874ca394ebdadf59";
export const url=new URL("../icons/planet-fill.svg?v=60950ffd4ac0380a7075dd199477b24ddb2d7f65f361b8aa4822d0491eb22837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
