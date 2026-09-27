export const name="wine-bold";
export const id="dl_b2059a492d4523409229";
export const url=new URL("../icons/wine-bold.svg?v=d59af42f8d9ca3b861342ee46f4127a942dc68d39574d8d81ab7d2853e004a1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
