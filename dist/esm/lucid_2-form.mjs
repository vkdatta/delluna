export const name="lucid_2-form";
export const id="dl_9f36579fad2b482fb263";
export const url=new URL("../icons/lucid_2-form.svg?v=bc5b77a410659704266c94e6c5b344da51d733ebed0374d4aaf672b999f37979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
