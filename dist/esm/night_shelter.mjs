export const name="night_shelter";
export const id="dl_de03908d14d432dc3ded";
export const url=new URL("../icons/night_shelter.svg?v=708c2bf7ce904338940e718de925012f9886aa2ce94efbb562c919f37d624250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
