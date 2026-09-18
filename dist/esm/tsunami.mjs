export const name="tsunami";
export const id="dl_7a0016ab89c04fc7958d";
export const url=new URL("../icons/tsunami.svg?v=d5ff3cc782d332b14f11f0c0af812bbf8106566c6694f8de85a72a162c5efcfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
