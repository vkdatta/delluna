export const name="ribbon";
export const id="dl_ae3ce9bf4c4e45e79b5d";
export const url=new URL("../icons/ribbon.svg?v=66237e22d6fa5f11d4db1af5cb4fb173474ea328247055a60bc47aca8bd2576e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
