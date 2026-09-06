export const name="person-simple-walk";
export const id="dl_367fff3185474dc2b45d";
export const url=new URL("../icons/person-simple-walk.svg?v=c64cd5214dd7c4821582d24e2bc21d18e8d0058b77ee0eb3f3f17c0043c635e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
