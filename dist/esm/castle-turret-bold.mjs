export const name="castle-turret-bold";
export const id="dl_8b294678cee54000bd39";
export const url=new URL("../icons/castle-turret-bold.svg?v=25bd9e6eb15bc591efe782a37945c583db3206901979aa602c48c7439c1f38eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
