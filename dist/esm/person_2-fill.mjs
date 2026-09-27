export const name="person_2-fill";
export const id="dl_fe2bcbea6612b551a67d";
export const url=new URL("../icons/person_2-fill.svg?v=5f662f6bb701d2a8c6cbbf01b2f3b0ebad06d4e33a89ecbaf5e96ba44f271e4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
