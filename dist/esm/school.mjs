export const name="school";
export const id="dl_400953509d328adbf6c0";
export const url=new URL("../icons/school.svg?v=daa4f26a58c4a5433acb3b998371009d85befa47ef24f3658bdcc968f06c5a90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
