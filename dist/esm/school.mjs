export const name="school";
export const id="dl_84e5a76c06be4da6baf2";
export const url=new URL("../icons/school.svg?v=56c6cafe4f1e82b71af7e399240e293842e6530076011a21146b873ed136ab1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
