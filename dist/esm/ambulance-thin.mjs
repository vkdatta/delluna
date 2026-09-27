export const name="ambulance-thin";
export const id="dl_5d6bfd22cb71447f907f";
export const url=new URL("../icons/ambulance-thin.svg?v=2f13c4cd4c911c8dea6e6aad35330c982d1fded95967ffc39499db2ad50b5546",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
