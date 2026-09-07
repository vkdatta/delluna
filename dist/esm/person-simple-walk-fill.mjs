export const name="person-simple-walk-fill";
export const id="dl_b1942b2be56d4376a6b3";
export const url=new URL("../icons/person-simple-walk-fill.svg?v=1bd98cb5854e25fb93e4fcb59cb3ebe2af4c4fc1d4ad9cc28f52508ebb35bbee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
