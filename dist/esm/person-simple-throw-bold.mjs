export const name="person-simple-throw-bold";
export const id="dl_f81d4cfa1b804fabb7e2";
export const url=new URL("../icons/person-simple-throw-bold.svg?v=23a37b1862fe83a42055783612e2cfee6eaee5da0e30df37fc10f4c59e691cf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
