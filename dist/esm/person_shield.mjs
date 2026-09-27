export const name="person_shield";
export const id="dl_ace64266d310b9ab1667";
export const url=new URL("../icons/person_shield.svg?v=9b232a9beea6625de32f94944eb3e20ee5947f8e01b76bd3c541aa804221addb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
