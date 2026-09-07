export const name="umbrella-simple";
export const id="dl_e646b9ee841646fd9371";
export const url=new URL("../icons/U/umbrella-simple.svg?v=ac6730f2abb8ae205a40ef143f78b6e5f288b25245dddf53ce5322b09f0c1882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
