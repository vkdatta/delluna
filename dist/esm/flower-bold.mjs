export const name="flower-bold";
export const id="dl_8456c9e83c934cdd9361";
export const url=new URL("../icons/flower-bold.svg?v=62368144aa0a2d75f8c496a9a84aa68c017c1834664b4ed8e3b9d570af6cbf4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
