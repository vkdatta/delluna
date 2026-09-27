export const name="shelves";
export const id="dl_43e919f40cadf0d9f075";
export const url=new URL("../icons/shelves.svg?v=03f7c75f3957e68b65cdbf446acad172019ef5aa5507960bb1cd121a2a992f77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
