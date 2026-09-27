export const name="person-simple-walk-fill";
export const id="dl_b1942b2be56d4376a6b3";
export const url=new URL("../icons/person-simple-walk-fill.svg?v=72bd5ae641ac9ea515a61516e3a0a9c1e1ae1880b3bcb5ffa67948ee64be9b85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
