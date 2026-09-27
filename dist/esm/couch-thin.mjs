export const name="couch-thin";
export const id="dl_824f3f7a570d4f549566";
export const url=new URL("../icons/couch-thin.svg?v=3859551640d6bf4ab6209d94d350d440377141f8b1afb8ab9b5120a322018120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
