export const name="person-simple-hike";
export const id="dl_f6031b801a6a44b2be2c";
export const url=new URL("../icons/person-simple-hike.svg?v=fc4dbfee728dfb7e844fdc8efe55485590037af17ab95fc8c5f1747929682388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
