export const name="lucid_2-file-key";
export const id="dl_950f3fe7c3794423891d";
export const url=new URL("../icons/lucid_2-file-key.svg?v=7fca6d6cd23c495d85eba58d1669d95895ab9b3ca56ed335b629ce84c857b792",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
